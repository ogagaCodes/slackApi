const { Router } = require("express");
const routes = require("./api/routes");






module.exports = () => {
  const router = Router();

  router.use("/", routes);

  return router;
};
