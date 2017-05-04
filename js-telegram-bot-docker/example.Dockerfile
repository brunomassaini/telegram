FROM node

ENV TELEGRAM_TOCKEN "YOUR_TOKEN_HERE"

RUN mkdir -r /usr/app/bot/node_modules
COPY node_modules /usr/app/bot/node_modules/
COPY bot.js /usr/app/bot

CMD node /usr/app/bot/bot.js