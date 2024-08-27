// Packages
const express = require("express");
const path = require("node:path");

// Routers
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");
const aboutRouter = require("./routes/aboutRouter");
const notFoundRouter = require("./routes/404Router.js");

const app = express();

// Set the static assets folder.
app.use(express.static(__dirname));

// Set the app to receive and process input from the user.
app.use(express.urlencoded({ extended: true }));

// Set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", indexRouter);
app.use("/new", newRouter);
app.use("/about", aboutRouter);

// 404 Not Fond page
app.use(notFoundRouter);

app.listen(8080, () => {
    console.log("The server is running on http://localhost:8080/");
});
