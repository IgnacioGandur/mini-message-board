const { Router } = require("express");
const newRouter = Router();
const newController = require("./../controller/newController");

newRouter.get("/", newController.getForm);
newRouter.post("/", newController.postForm);

module.exports = newRouter;
