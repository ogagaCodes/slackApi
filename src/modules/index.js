const { Router } = require("express");
const apiRoutes = require("./api/routes");







module.exports = () => {
  const router = Router();
  router.use("/api", apiRoutes);

  return router;
};
