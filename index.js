require("dotenv").config();

const express = require("express");

const app = express();

require("./databases/mongodb");

const bodyParser = require("body-parser");
const morgan = require("morgan");

const helmet = require("helmet");
const cors = require("cors");

const logger = require("./utils/logger");

const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());

app.use(morgan("combined"));

app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => logger.info(`app listening on port ${PORT}`));
