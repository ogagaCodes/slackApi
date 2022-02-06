const { Router } = require("express");
const controller = require("./controllers");

const router = Router();

router.get(
  "/user-response",
  controller.getUserResponseController
);
router.post(
  "/user-response",
  controller.saveUserResponseController
);

module.exports = router;
