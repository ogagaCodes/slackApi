const { init_bot } = require("../_init_bot");


const app = init_bot();

// listen for messages

app.command('/bot', (_, say) => {
  await say("Welcome. How are you doing");
});