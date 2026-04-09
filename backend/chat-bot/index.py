import json
import os
import urllib.request
import urllib.error


SYSTEM_PROMPT = """Ты — AI-помощник P2P Profit. Отвечаешь на вопросы посетителей сайта о P2P арбитраже и обучении.

КЛЮЧЕВАЯ ИНФОРМАЦИЯ О P2P PROFIT:
- P2P Profit — это обучение P2P арбитражу криптовалюты с нуля
- P2P арбитраж — покупка крипты дешевле на одной площадке и продажа дороже на другой. Разница = доход
- Это НЕ трейдинг, НЕ инвестиции, НЕ казино. Чистая математика
- Доход не зависит от роста/падения рынка

ОБУЧЕНИЕ:
- Базовое обучение БЕСПЛАТНО — вступаешь в Telegram канал
- Личный куратор 24/7 сопровождает каждого
- 1 500+ учеников уже прошли обучение
- Первая прибыльная сделка на 3-й день
- 2-3 часа в день достаточно
- Стартовый капитал: от 10 000₽, рекомендуем от 15 000₽
- Средний доход учеников: 50 000-150 000₽/мес
- Пожизненный доступ к материалам

КОМАНДА:
- Дмитрий Волков — основатель, 4+ года в P2P
- Анна Карпова — старший куратор, 600+ учеников
- Артём Ким — куратор продвинутой группы

БЕЗОПАСНОСТЬ:
- P2P обмен крипты полностью легален в России
- Сделки через верифицированные биржи: Binance, Bybit, OKX
- Эскроу-защита бирж — деньги замораживаются до подтверждения
- При соблюдении правил риск потери минимален

ПРАВИЛА ОТВЕТОВ:
- Отвечай дружелюбно, по-русски, кратко (2-4 предложения)
- Если спрашивают как начать — направляй в Telegram канал
- НИКОГДА не выдумывай информацию, которой нет выше
- Не обещай конкретные суммы заработка (только средние по ученикам)
- Если вопрос не связан с P2P/обучением — вежливо перенаправь к теме"""


OFFLINE_ANSWERS = {
    "что такое p2p": "P2P арбитраж — это покупка криптовалюты дешевле на одной площадке и продажа дороже на другой. Разница в цене — твой заработок. Это не трейдинг и не казино, а чистая математика. Доход не зависит от роста или падения рынка.",
    "сколько можно заработать": "Средний доход наших учеников — от 50 000 до 150 000₽ в месяц. Всё зависит от времени, которое ты уделяешь (2-3 часа в день достаточно) и стартового капитала. Первую прибыль получают уже на 3-й день обучения.",
    "как начать": "Начать очень просто! Вступай в наш бесплатный Telegram канал — там первые уроки и личный куратор, который проведёт тебя за руку. Базовое обучение полностью бесплатно, без скрытых платежей.",
    "это легально": "Да, P2P обмен криптовалюты — полностью легальная деятельность. Все сделки проходят через верифицированные биржи (Binance, Bybit, OKX) с эскроу-защитой. Никаких серых схем.",
    "сколько нужно для старта": "Начать можно от 10 000₽, но мы рекомендуем от 15 000₽ для ощутимого результата. Чем больше оборотный капитал — тем больше прибыль с каждой сделки.",
    "сколько времени": "2-3 часа в день вполне достаточно. Можно утром, вечером или разбить на части. Многие наши ученики успешно совмещают P2P с основной работой или учёбой.",
    "это не обман": "Мы не просим переводить деньги на «инвестиционный счёт» и не обещаем миллионы за день. Базовое обучение бесплатно — ты можешь попробовать без рисков. 1 500+ учеников уже зарабатывают, отзывы реальных людей есть на сайте.",
    "кто куратор": "У нас 3 куратора: Дмитрий Волков (основатель, 4+ года в P2P, обучил 1 500+ учеников), Анна Карпова (старший куратор, 600+ учеников) и Артём Ким (куратор продвинутой группы, доход 200К+/мес).",
}

DEFAULT_ANSWER = "Отличный вопрос! К сожалению, я сейчас не могу дать развёрнутый ответ. Напиши нам в Telegram — куратор ответит лично и подробно на все вопросы. Канал бесплатный, вступай!"


def find_offline_answer(message: str) -> str:
    msg = message.lower().strip()
    for key, answer in OFFLINE_ANSWERS.items():
        if key in msg:
            return answer
    if any(w in msg for w in ["привет", "здравствуй", "хай", "добрый"]):
        return "Привет! Я помощник P2P Profit. Могу рассказать о P2P арбитраже, обучении, заработке и нашей команде. Что тебя интересует?"
    if any(w in msg for w in ["спасибо", "благодар"]):
        return "Рад помочь! Если будут ещё вопросы — пиши. А если хочешь начать зарабатывать — вступай в наш бесплатный Telegram канал, куратор поможет с первыми шагами."
    return DEFAULT_ANSWER


def handler(event: dict, context) -> dict:
    """AI чат-бот для ответов на вопросы клиентов P2P Profit"""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id, X-Auth-Token, X-Session-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    raw_body = event.get('body') or '{}'
    body = json.loads(raw_body)
    message = body.get('message', '').strip()
    history = body.get('history', [])

    if not message:
        return {
            'statusCode': 400,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Сообщение не может быть пустым'})
        }

    if len(message) > 500:
        message = message[:500]

    api_key = os.environ.get('OPENAI_API_KEY', '')
    if not api_key:
        reply = find_offline_answer(message)
        return {
            'statusCode': 200,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'reply': reply})
        }

    messages = [{"role": "system", "content": SYSTEM_PROMPT}]

    for msg in history[-6:]:
        role = msg.get('role', 'user')
        content = msg.get('content', '')
        if role in ('user', 'assistant') and content:
            messages.append({"role": role, "content": content[:300]})

    messages.append({"role": "user", "content": message})

    payload = json.dumps({
        "model": "gpt-4o-mini",
        "messages": messages,
        "max_tokens": 300,
        "temperature": 0.7,
    }).encode('utf-8')

    req = urllib.request.Request(
        "https://api.openai.com/v1/chat/completions",
        data=payload,
        headers={
            'Content-Type': 'application/json',
            'Authorization': f'Bearer {api_key}'
        }
    )

    try:
        resp = urllib.request.urlopen(req, timeout=15)
        result = json.loads(resp.read().decode())
        reply = result['choices'][0]['message']['content']
    except urllib.error.HTTPError as e:
        print(f"OpenAI error: {e.code} {e.reason}")
        reply = find_offline_answer(message)
    except Exception as e:
        print(f"Request error: {e}")
        reply = find_offline_answer(message)

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'reply': reply})
    }
