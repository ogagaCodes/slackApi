const Responses = require("../api/model");

exports.startBot = async (bodyData) => {
  try {
   const input = bodyData.text;
   console.log("USER_INPUT: ", input);
    let data = { 
        response_type: 'in_channel', // public to the channel 
        text: 'Welcome. How are you doing?', 
        // attachments:[ { 
        //   image_url: 'https://http.cat/302.jpg' 
        // } ]
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
