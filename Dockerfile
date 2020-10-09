FROM node:12 AS builder
RUN mkdir -p /opt/dice-game/dice-game-dashboard
WORKDIR /opt/dice-game/dice-game-dashboard
COPY . .
RUN npm install
RUN npm run-script build
COPY --from=builder ./dist/dice-game-dashboard /usr/share/nginx/html

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
