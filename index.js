const express = require("express");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerJSDoc = YAML.load("./apis.yaml");

const port = process.env.PORT || 5000;

connectDB();

const app = express();

// const swaggerDefinition = {
//   info: {
//     title: "Task Manager",
//     version: "1.0.0",
//     description: "Endpoints to manage tasks of an user",
//   },
//   host: "localhost:5000",
//   basePath: "/",
//   securityDefinitions: {
//     bearerAuth: {
//       type: "apiKey",
//       name: "Authorization",
//       scheme: "bearer",
//       in: "header",
//     },
//   },
// };

// const options = {
//   swaggerDefinition,
//   apis: ["./routes/*.js"],
// };

// const swaggerSpec = swaggerJSDoc(options);
// app.get("/swagger.json", function (req, res) {
//   res.setHeader("Content-Type", "application/json");
//   res.send(swaggerSpec);
// });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));
app.use("/api/tasks", require("./routes/taskRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);
app.listen(port, () => console.log(`Server Started at ${port} port`));
