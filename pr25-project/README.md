# Практическая работа №25: Деплой приложения

## Описание проекта

Проект демонстрирует процесс деплоя полноценного веб-приложения с React фронтендом и Express.js бэкендом.

## Используемые технологии и платформы

- **Frontend**: React
- **Backend**: Express.js
- **Платформы для деплоя**:
  - Frontend: Vercel
  - Backend: Railway

## Структура проекта
pr25-project/
├── backend/ # Express.js сервер
│ ├── .env.example
│ ├── package.json
│ └── server.js
├── frontend/ # React приложение
│ ├── public/
│ ├── src/
│ ├── .env.example
│ ├── package.json
│ └── vercel.json
├── README.md
└── answers.md

## Процесс деплоя

### Деплой бэкенда на Railway

1. Создать аккаунт на [railway.app](https://railway.app)
2. Создать новый проект и подключить GitHub репозиторий
3. Выбрать папку `backend` как корневую директорию
4. Добавить environment variables в настройках проекта:
   - `NODE_ENV=production`
   - `PORT=5000`
   - `CORS_ORIGIN=ваш-frontend-url.vercel.app`

### Деплой фронтенда на Vercel

1. Создать аккаунт на [vercel.app](https://vercel.app)
2. Импортировать GitHub репозиторий
3. Выбрать папку `frontend` как корневую директорию
4. Добавить environment variable:
   - `REACT_APP_API_URL=ваш-backend-url.railway.app`

## Environment Variables

### Backend (.env)
```env
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://your-app.vercel.app

