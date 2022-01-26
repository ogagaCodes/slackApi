const mongoose = require("mongoose");
const app = require("./src/server");
const { KEYS } = require("./src/constants/keys");
const PORT = process.env.PORT || 80;

mongoose
  .connect(KEYS.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server has started!... and running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
