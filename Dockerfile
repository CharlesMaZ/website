FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .
RUN npm run build

RUN npm install -g serve
CMD ["serve", "-s", "dist"]

EXPOSE 80

# CMD ["npm", "run", "dev"]


