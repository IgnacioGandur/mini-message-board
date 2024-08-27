const { Router } = require("express");
const moment = require("moment");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: moment(new Date()).format("dddd, Do MMMM YYYY [at] h:mm:ss a"),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: moment(new Date()).format("dddd, Do MMMM YYYY [at] h:mm:ss a"),
    },
];

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
        messages,
        links,
    };
    next();
});

indexRouter.get("/", (req, res) => {
    res.render("pages/index", {
        title: "Mini Message Board | Homepage",
    });
});

module.exports = indexRouter;
