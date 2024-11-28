import { Request, Response, NextFunction } from 'express';
import logger from './../utils/loggingUtils';

// Logging middleware
export const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now(); // Start time to measure response time

  // Log request details
  logger.info(`Incoming request: ${req.method} ${req.url}`);

  // Once the response is finished, log the status code and response time
  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(`Response: ${res.statusCode} ${req.method} ${req.url} - ${duration}ms`);
  });

  next(); // Pass control to the next middleware or route handler
};
