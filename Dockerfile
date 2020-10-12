FROM node as build
WORKDIR /opt/dice-game/dice-game-dashboard
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable
COPY --from=build /opt/dice-game/dice-game-dashboard/dist/dice-game-dashboard /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
