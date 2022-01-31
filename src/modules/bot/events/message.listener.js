const { Router } = require("express");
const router = Router();
const KEYS = require("../../../constants/keys");
const { createEventAdapter } = require("@slack/events-api");
const slackSigningSecret = KEYS.KEYS.SIGNING_SECRET;
const slackEvents = createEventAdapter(slackSigningSecret);
const port = 3000;

(async () => {
  // Start the built-in server
  const server = await slackEvents.start(port);

  // Log a message when the server is ready
  console.log(`Listening for events on ${server.address().port}`);
  // All errors in listeners are caught here.
  slackEvents.on("error", (error) => {
    console.log(`error: ${error}`);
  });
})();

exports.listenForEvents = () => {
  slackEvents.requestListener();
};

slackEvents.on("message", (event) => {
  console.log(
    `Received a message event from user ${event.user} in channel ${event.channel}`
  );
});
