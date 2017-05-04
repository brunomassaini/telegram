var TelegramBot = require('node-telegram-bot-api');

var token = process.env.TELEGRAM_TOCKEN;

var bot = new TelegramBot(token, { polling: true });

bot.onText(/\/ping/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = "to aqui, hihihi...";

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/chatid/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = chatId;

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/quer_fazer_alguma_coisa/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = "não";

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/o_que_voce_tem/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = ["sono","frio","cançada","preguiça"]; // the captured "whatever"
  valueToUse = resp[Math.floor(Math.random() * resp.length)];

  bot.sendMessage(chatId, valueToUse);
});

bot.onText(/\/o_que_quer_comer/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = ["tuuudooo","quero pizza","pitiiiçaa","PIZZA"]; // the captured "whatever"
  var values = ["test","values","go","here"],
  valueToUse = resp[Math.floor(Math.random() * values.length)];

  bot.sendMessage(chatId, valueToUse);
});

bot.onText(/\/random/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = ["querooo comiiiiida","titititi","alguém tira o Bruno daqui?","vamos conversar :)"]; // the captured "whatever"
  var values = ["test","values","go","here"],
  valueToUse = resp[Math.floor(Math.random() * values.length)];

  bot.sendMessage(chatId, valueToUse);
});

bot.onText(/\/repete_ai (.+)/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.onText(/\/ironico/, function (msg, match) {

  var chatId = msg.chat.id;
  var resp = ["muito engraçado né","troxa","vou nem falar nada","-.-"]; // the captured "whatever"
  var values = ["test","values","go","here"],
  valueToUse = resp[Math.floor(Math.random() * values.length)];

  bot.sendMessage(chatId, valueToUse);
});