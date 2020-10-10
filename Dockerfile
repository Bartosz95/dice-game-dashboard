FROM node:12 AS builder
WORKDIR /opt/dice-game/dice-game-dashboard
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY --from=builder /opt/dice-game/dice-game-dashboard/dist/dice-game-dashboard /usr/share/nginx/html

FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
