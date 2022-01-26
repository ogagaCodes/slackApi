const mongoose = require("mongoose");
const app = require("./src/server");
const { KEYS } = require("./src/constants/keys");
const PORT = process.env.PORT || 80;

mongoose
  .connect(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server has started!... and running on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error));
