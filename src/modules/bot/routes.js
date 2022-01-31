const { Router } = require("express");
const controller = require("./controller");

const router = Router();

router.post(
  "/",
  controller.botController
);

router.post(
  "/events",
  controller.messageController
);

module.exports = router;
