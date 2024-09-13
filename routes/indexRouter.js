const { Router } = require("express");
const { indexGet } = require("../controller/indexController");
const indexRouter = Router();

const links = [
    {
        href: "/",
        text: "Homepage",
        icon: "home",
    },
    {
        href: "/new",
        text: "Write a new message!",
        icon: "send",
    },
    {
        href: "/about",
        text: "About",
        icon: "lightbulb",
    },
    {
        href: "/bla",
        text: "404 Page",
        icon: "error",
    },
];

indexRouter.use((req, res, next) => {
    res.locals = {
        links,
    };
    next();
});

indexRouter.get("/", indexGet);

module.exports = indexRouter;
