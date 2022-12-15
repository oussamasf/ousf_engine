const mongoose = require("mongoose");
const logger = require("../../utils/logger");
require("dotenv").config();
let { MONGO_DB_PORT } = process.env;

exports.connectDB = async () => {
  try {
    logger.info(`connection to mongodb://localhost:${MONGO_DB_PORT}/enginedb`);
    await mongoose.connect(`mongodb://localhost:${MONGO_DB_PORT}/enginedb`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("MongoDB connected");
  } catch (error) {
    logger.error(error.message);
    process.exit(1);
  }
};
