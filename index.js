var bot = new (require('telecore'))({
  "token": "146397066:AAF9krbMB8CQFOISiKWIZZSayVc318y10bA",
  "webhook": true,
  "hook": {
    "port": process.env.PORT || 443,
    "host": "localhost",
    "url": "https://tggroup-info-bot.herokuapp.com"
  }
});


bot.on('/start', function(msg, args) {
  bot.api.sendMessage({
    "chat_id": msg.chat.id,
    "text": "Group Id:"+msg.chat.id+"\n Sender:"+msg.from.id
  });
});
 
bot.on('/help', function(msg, args) {
  bot.api.sendMessage({
    "chat_id": msg.chat.id,
    "text": "I am a Telegrambot that echos the group chat id and the users ID of user who sends /start"
  });
});
 
