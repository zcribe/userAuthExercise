import express, { Express } from "express";
import mongoose from "mongoose";

import logger from "./utils/logger";
import config from "./utils/config";
import userRouter from "./controllers/user";
import loginRouter from "./controllers/login";

const app: Express = express();

logger.info("Connecting to the Database");
mongoose
  .connect(config.MONGO_URI)
  .then(() => {
    logger.info("Connected to the Database");
  })
  .catch((error) => {
    logger.error("Error connecting to the Database", error.message);
  });

app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/login", loginRouter)

export default app;
