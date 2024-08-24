// Packages
const express = require("express");
const path = require("node:path");

// Routers
const indexRouter = require("./routes/indexRouter");

const app = express();

// Set the static assets folder.
app.use(express.static(__dirname));

// Set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get("/", indexRouter);

app.listen(8080, () => {
    console.log("The server is running on http://localhost:8080/");
});
