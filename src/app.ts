import 'express-async-errors';
import express, { Application } from 'express';
import * as dotenv from 'dotenv';
import logger from './utils/loggingUtils';
import { logRequest } from './middlewares/logging';

dotenv.config();
const app: Application = express();

// Middlewares
app.use(express.json());
app.use(logRequest);

// Routes

// Error handling
app.all('*', (req, res) => {
  logger.info('BOILERPLATE IS NOT ALTERED');
});

export default app;
