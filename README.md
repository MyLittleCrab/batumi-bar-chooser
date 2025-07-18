# Bar Chooser Bot / Бот для выбора баров

[![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org/)
[![Telegram](https://img.shields.io/badge/Telegram-Bot-blue.svg)](https://telegram.org/)

A Telegram bot that helps users discover random bars in Batumi, Georgia by fetching data from the Modiak.ge API.

Телеграм-бот, который помогает пользователям находить случайные бары в Батуми, Грузия, получая данные из API Modiak.ge.

---

## 🇬🇧 English

### Description

This Telegram bot responds to specific keywords in Russian and suggests random bars in Batumi. When triggered, it provides:
- Bar name and description
- Address and website
- Photo (if available)
- Location coordinates
- Link to detailed information on Modiak.ge

### Features

- 🎯 **Smart keyword detection** - Responds to "куда сходить" and "какой бар"
- 🏪 **Random bar selection** - Fetches from Modiak.ge database
- 📸 **Rich media responses** - Includes photos, location, and details
- 🌐 **Multilingual support** - Handles Russian and English content
- 📱 **Mobile-friendly** - Works seamlessly on all Telegram clients

### Prerequisites

- Node.js 18 or higher
- Telegram Bot Token (obtain from [@BotFather](https://t.me/BotFather))
- Internet connection for API requests

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd bar-chooser
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env file and add your Telegram Bot Token
   ```

4. **Configure your bot:**
   Create a `.env` file with the following content:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   ```

### Usage

1. **Start the bot:**
   ```bash
   npm start
   ```

2. **Interact with the bot:**
   - Send messages containing "куда сходить" or "какой бар"
   - The bot will respond with a random bar recommendation

### Project Structure

```
bar-chooser/
├── main.js           # Bot entry point and message handling
├── lib.js            # Utility functions and API integration
├── package.json      # Dependencies and scripts
├── .env             # Environment variables (not in repo)
├── .gitignore       # Git ignore rules
└── README.md        # This file
```

### API Reference

The bot uses the Modiak.ge public API:
- **Endpoint:** `https://modiak.ge/api/PublicFirms/Filtered?rubricIds=4`
- **Response:** Array of bar objects with details

### Development

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

### Commands

- `npm start` - Start the bot
- `npm test` - Run tests (not implemented)

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `TELEGRAM_BOT_TOKEN` | Your Telegram Bot Token from BotFather | ✅ |

---

## 🇷🇺 Русский

### Описание

Этот Телеграм-бот отвечает на определенные ключевые слова на русском языке и предлагает случайные бары в Батуми. При активации он предоставляет:
- Название и описание бара
- Адрес и веб-сайт
- Фотографию (если доступна)
- Координаты местоположения
- Ссылку на подробную информацию на Modiak.ge

### Возможности

- 🎯 **Умное распознавание ключевых слов** - Реагирует на "куда сходить" и "какой бар"
- 🏪 **Случайный выбор бара** - Получает данные из базы Modiak.ge
- 📸 **Мультимедийные ответы** - Включает фото, местоположение и детали
- 🌐 **Многоязычная поддержка** - Обрабатывает контент на русском и английском
- 📱 **Мобильная совместимость** - Работает во всех клиентах Telegram

### Требования

- Node.js 18 или выше
- Токен Telegram бота (получить у [@BotFather](https://t.me/BotFather))
- Интернет-соединение для API запросов

### Установка

1. **Клонируйте репозиторий:**
   ```bash
   git clone <repository-url>
   cd bar-chooser
   ```

2. **Установите зависимости:**
   ```bash
   npm install
   ```

3. **Настройте переменные окружения:**
   ```bash
   cp .env.example .env
   # Отредактируйте файл .env и добавьте ваш токен Telegram бота
   ```

4. **Настройте вашего бота:**
   Создайте файл `.env` со следующим содержимым:
   ```env
   TELEGRAM_BOT_TOKEN=ваш_токен_бота_здесь
   ```

### Использование

1. **Запустите бота:**
   ```bash
   npm start
   ```

2. **Взаимодействие с ботом:**
   - Отправляйте сообщения, содержащие "куда сходить" или "какой бар"
   - Бот ответит рекомендацией случайного бара

### Структура проекта

```
bar-chooser/
├── main.js           # Точка входа бота и обработка сообщений
├── lib.js            # Вспомогательные функции и интеграция с API
├── package.json      # Зависимости и скрипты
├── .env             # Переменные окружения (не в репозитории)
├── .gitignore       # Правила игнорирования Git
└── README.md        # Этот файл
```

### Справочник API

Бот использует публичный API Modiak.ge:
- **Конечная точка:** `https://modiak.ge/api/PublicFirms/Filtered?rubricIds=4`
- **Ответ:** Массив объектов баров с деталями

### Разработка

Для участия в проекте:

1. Сделайте форк репозитория
2. Создайте ветку для функции
3. Внесите изменения
4. Добавьте тесты при необходимости
5. Отправьте pull request

### Команды

- `npm start` - Запустить бота
- `npm test` - Запустить тесты (не реализовано)

### Переменные окружения

| Переменная | Описание | Обязательно |
|------------|----------|-------------|
| `TELEGRAM_BOT_TOKEN` | Ваш токен Telegram бота от BotFather | ✅ |

---

## 📝 License / Лицензия

ISC License

## 🤝 Contributing / Участие в разработке

Contributions are welcome! Please feel free to submit a Pull Request.

Вклады приветствуются! Пожалуйста, не стесняйтесь отправлять Pull Request.

## 📞 Support / Поддержка

If you have any questions or need help, please open an issue in this repository.

Если у вас есть вопросы или нужна помощь, пожалуйста, создайте issue в этом репозитории.