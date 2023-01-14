const express = require("express");
const cors = require("cors");
const appRouter = require("./router/appRoutes")
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", appRouter)

app.listen(3003, () => {
  console.log("Server running in port 3003");
});

module.export = app;
