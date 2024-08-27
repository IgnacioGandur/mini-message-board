const moment = require("moment");

function getForm(req, res) {
    res.render("pages/form", {
        title: "Mini Message Board | Send a mini message!",
    });
}

function postForm(req, res) {
    res.locals.messages.push({
        text: req.body.userMessage,
        user: req.body.userName,
        added: moment(new Date()).format("dddd, Do MMMM YYYY [at] h:mm:ss a"),
    });
    res.redirect("/");
}

module.exports = {
    getForm,
    postForm,
};
