const { Router } = require("express");
const router = Router();

router.use((req, res) => {
    res.status(404);

    if (req.accepts("html")) {
        res.render("pages/404", { title: "Mini Message Board | 404" });
        return;
    }

    if (req.accepts("json")) {
        res.json({ error: "Not found" });
        return;
    }

    res.type("text").send("Not found");
});

module.exports = router;
