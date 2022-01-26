const { Router } = require("express");
const controller = require("./controllers");

const router = Router();

router.get(
  "/user-response",
  controller.getUserResponseController
);

module.exports = router;
