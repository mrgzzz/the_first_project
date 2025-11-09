
## Процесс деплоя

### Backend (Railway)
1. Создать проект на Railway
2. Подключить GitHub репозиторий
3. Настроить environment variables
4. Деплой автоматически запускается при push в main ветку

### Frontend (Vercel)
1. Создать проект на Vercel
2. Подключить GitHub репозиторий
3. Настроить environment variables
4. Деплой автоматически запускается при push в main ветку

## Environment Variables

### Backend (.env)
- `NODE_ENV=production`
- `PORT=5000`
- `CORS_ORIGIN=your-frontend-url`

### Frontend (.env)
- `REACT_APP_API_URL=your-backend-url`

## Ссылки на задеплоенные приложения

- Frontend: [your-app.vercel.app](https://your-app.vercel.app)
- Backend: [your-api.railway.app](https://your-api.railway.app)

## Проверка работы

После деплоя проверьте:
1. Открытие фронтенда в браузере
2. Работу API endpoints (/api/health, /api/data)
3. Интеграцию между фронтендом и бэкендом