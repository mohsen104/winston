import express from 'express';
import logger from './logger.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
    logger.info(`Request received: ${req.method} ${req.url}`);
    next();
})

app.get("/", (req, res, next) => {
    res.send("hello")
    logger.info('Root route accessed')
})

app.listen(3000, () => {
    logger.info("server run on port 3000");
})