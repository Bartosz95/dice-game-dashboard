FROM node:12 AS builder
RUN mkdir -p /opt/dice-game/dice-game-dashboard
WORKDIR /opt/dice-game/dice-game-dashboard
COPY . .
RUN npm install
RUN npm install -g @angular/cli @angular-devkit/build-angular
EXPOSE 4200
CMD ["npm", "start"]
