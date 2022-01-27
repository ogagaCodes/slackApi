const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.post(
  "/start-bot",
  controller.botController
);

module.exports = router;
