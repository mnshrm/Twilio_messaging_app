const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorMiddleWare = require("./middleware/error.js");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const messageRouter = require("./routes/messageRoutes.js");

app.use("/message", messageRouter);

//Middleware for errors
app.use(errorMiddleWare);

module.exports = app;
