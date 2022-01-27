const Responses = require("../api/model");

exports.startBot = async (data) => {
  try {
   const input = data.text;
   console.log("USER_INPUT: ", input);
    let datum = { 
        response_type: 'in_channel', // public to the channel 
        text: 'Welcome. How are you doing?', 
        // attachments:[ { 
        //   image_url: 'https://http.cat/302.jpg' 
        // } ]
    };
    return {
      error: false,
      message: "Success",
      datum,
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
