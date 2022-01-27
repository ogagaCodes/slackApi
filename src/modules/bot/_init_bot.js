// const { App } = require('@slack/bolt');
// const { KEYS } = require("../../constants/keys")

// exports.init_bot = async() => {
//     try {
//         const app = new App({
//             signingSecret: KEYS.SIGNING_SECRET,
//             token: KEYS.OAUTH_TOKEN,
//           });
          
//           /* Add functionality here */
          
//           (async () => {
//             // Start the app
//             await app.start(KEYS.PORT || 3000);
          
//             console.log('⚡️ Bolt app is running!');
//             return app;
//           })();
//     } catch (error) {
//         console.error(error);
//     }
// }
