const mongoose = require("mongoose");
const logger = require("../../utils/logger");
require("dotenv").config();
let { MONGO_DB_PORT } = process.env;

mongoose.set("strictQuery", false);

mongoose.connect(`mongodb://localhost:${MONGO_DB_PORT}/enginedb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  logger.info("connected to db");
});
mongoose.connection.on("disconnected", (err) => {
  logger.error("disconected", err);
});
