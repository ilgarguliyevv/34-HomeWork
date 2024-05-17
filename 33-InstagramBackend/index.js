const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./src/routes/usersRoutes");
const app = express();
const port = 3000;

require("./src/config/db");

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
