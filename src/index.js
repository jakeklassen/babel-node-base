import express from 'express';
import helmet from 'helmet';
import Pino from 'pino';
import Chance from 'chance';
import Mongoose from 'mongoose';

Mongoose.Promise = global.Promise;

const chance = new Chance();

const logger = Pino();
const app = express();

app.use(helmet());

app.get('/', (req, res) => {
  res.json({ message: `o hai ${chance.first()}` });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`listening on port ${port}`);
});
