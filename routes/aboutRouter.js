const { Router } = require("express");
const path = require("node:path");

const aboutRouter = Router();

aboutRouter.get("/", (req, res) => {
    res.render("pages/about", { title: "Mini Message Board | About " });
});

module.exports = aboutRouter;
