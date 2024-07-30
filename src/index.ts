import app from "./app";
import config from "./utils/config";
import logger from "./utils/logger"

app.listen(config.PORT, () => {
    logger.info(`Server is running on http://127.0.0.1:${config.PORT}`)
});
