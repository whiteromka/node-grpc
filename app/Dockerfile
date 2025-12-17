FROM node:20-alpine

WORKDIR /app

# копируем package.json и package-lock.json
COPY package*.json ./

# устанавливаем зависимости
RUN npm install

# копируем серверный код
COPY index.js ./

# CMD для продакшн
CMD ["npm", "start"]
