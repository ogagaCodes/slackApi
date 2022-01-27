const Responses = require("../api/model");

exports.startBot = async (bodyData) => {
  try {
    const input = bodyData.text;
    console.log("USER_INPUT: ", input);
    let data = {
      response_type: "in_channel", // public to the channel
      text: "Welcome. How are you doing?",
      attachments: [
        {
          text: "Choose a game to play",
          fallback:
            "If you could read this message, you'd be choosing something fun to do right now.",
          color: "#3AA3E3",
          attachment_type: "default",
          callback_id: "game_selection",
          actions: [
            {
              name: "games_list",
              text: "Pick a game...",
              type: "select",
              options: [
                {
                  text: "Hearts",
                  value: "hearts",
                },
                {
                  text: "Bridge",
                  value: "bridge",
                },
                {
                  text: "Checkers",
                  value: "checkers",
                },
              ],
            },
          ],
        },
      ],
    };
    return {
      error: false,
      message: "Success",
      data,
    };
  } catch (err) {
    console.log(err?.response?.data || err);
    return {
      error: true,
      message: "Error Initializing bot",
      data: err?.response?.data || err,
    };
  }
};
