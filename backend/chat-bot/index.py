import json
import os
import urllib.request


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
- Дмитрий Волков — основатель, 3+ года в P2P
- Анна Карпова — старший куратор, 400+ учеников
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

    api_key = os.environ.get('OPENAI_API_KEY', '')
    if not api_key:
        return {
            'statusCode': 500,
            'headers': {'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'AI сервис временно недоступен'})
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

    resp = urllib.request.urlopen(req, timeout=15)
    result = json.loads(resp.read().decode())
    reply = result['choices'][0]['message']['content']

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'reply': reply})
    }
