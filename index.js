const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const morgan = require("morgan");

const helmet = require("helmet");
const cors = require("cors");

const logger = require("./utils/config.winston");

require("dotenv").config();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());

app.use(morgan("combined"));

app.use(cors());
app.use(helmet());

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.listen(PORT, () => logger.info(`app listening on port ${PORT}`));