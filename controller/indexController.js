const { getAllMessages } = require("../db/queries");

async function indexGet(req, res) {
    const messages = await getAllMessages();

    res.render("pages/index", {
        title: "Mini message board | Homepage",
        messages: messages,
    });
}

module.exports = {
    indexGet,
};
