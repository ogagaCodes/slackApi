const { Router } = require("express");
const router = Router();
const { createEventAdapter } = require('@slack/events-api')
const slackSigningSecret = process.env.SLACK_SIGNING_SECRET
const slackEvents = createEventAdapter(slackSigningSecret)

exports.listenForEvents = (app) => {
  app.use('/events', slackEvents.requestListener())
}

slackEvents.on('message', (event) => {
  console.log(`Received an app_mention event from user ${event.user} in channel ${event.channel}`)
})

// All errors in listeners are caught here.
slackEvents.on('error', (error) => {
  console.log(`error: ${error}`)
})