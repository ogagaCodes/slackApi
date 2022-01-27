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
          fallback:
            "Say your mood",
          color: "#3AA3E3",
          attachment_type: "default",
          callback_id: "mood_selection",
          actions: [
            {
              name: "mood_list",
            //   text: "Pick a game...",
              type: "select",
              options: [
                {
                  text: "Doing Well",
                  value: "well",
                },
                {
                  text: "Neutral",
                  value: "neutral",
                },
                {
                  text: "Feelng Lucky",
                  value: "lucky",
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
