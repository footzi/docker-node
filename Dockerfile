# Example
# Главный image
FROM node

# Устанавливаем папку-контекст в image
WORKDIR /app

# Копируем сначала файл package
COPY package.json /app

# Данные команды запускаются 1 раз при сборке image
RUN npm install

# Копируем все файлы в папку-контекст - /арр
COPY . .

VOLUME ['/app/data']

# Дефолтный порт для запуска
EXPOSE $PORT

# Команды запускаются при запуске image
CMD ["node", "index.js"]






