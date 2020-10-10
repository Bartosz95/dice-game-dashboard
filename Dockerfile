FROM node as node
WORKDIR /opt/dice-game/dice-game-dashboard
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY --from=node ./dist/dice-game-dashboard /usr/share/nginx/html

FROM nginx:stable
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
