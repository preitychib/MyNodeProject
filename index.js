const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/errorMiddleware");
// const mongoose = require("mongoose");
// const url = "mongodb://localhost/TaskDBex";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/tasks", require("./routes/taskRoutes"));
app.use(errorHandler)
app.listen(port, () => console.log("server started"));

// mongoose.connect(url, { useNewUrlParser: true })

// const con = mongoose.connection

// con.on('open', function () {
//     console.log('connected....')
// })
