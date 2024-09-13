const dbInteractions = require("../db/queries");
const { body, validationResult } = require("express-validator");
const errorDetails = require("../utilities/errorDetails");

const messageValidator = [
    body("userName")
        .trim()
        .notEmpty()
        .withMessage(errorDetails.emptyField("Username"))
        .isLength({ min: 3, max: 40 })
        .withMessage(errorDetails.lengthError("Username", 3, 40)),
    body("userMessage")
        .trim()
        .notEmpty()
        .withMessage(errorDetails.emptyField("User message"))
        .isLength({ min: 3, max: 400 })
        .withMessage(errorDetails.lengthError("User message", 3, 400)),
];

const newController = {
    getForm(req, res) {
        res.render("pages/form", {
            title: "Mini Message Board | Send a mini message!",
        });
    },
    postForm: [
        messageValidator,
        async function postForm(req, res) {
            const errors = validationResult(req);

            if (!errors.isEmpty()) {
                return res.status(400).render("pages/form", {
                    title: "Error creating the message",
                    errors: errors.array(),
                    userName: req.body.userName,
                    userMessage: req.body.userMessage,
                });
            }

            const { userName, userMessage } = req.body;
            await dbInteractions.insertMessage(userName, userMessage);
            res.redirect("/");
        },
    ],
};

module.exports = newController;
