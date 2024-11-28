import winston, { Logger } from 'winston';

// Define a custom log format for the console (human-readable)
const consoleLogFormat = winston.format.combine(
  // Adds color to the log level in the console
  winston.format.colorize(),
  // Timestamp format
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  // Human-readable format
  winston.format.printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}] - ${message}`;
  })
);

// Define a log format for the file (JSON format)
const fileLogFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), // Timestamp format
  winston.format.json() // Logs in JSON format for the file
);

// Create the logger instance
const logger: Logger = winston.createLogger({
  level: 'info', // Default log level
  transports: [
    // Console transport - human-readable logs
    new winston.transports.Console({
      format: consoleLogFormat, // Use the human-readable format for console
    }),

    // File transport - JSON-formatted logs
    new winston.transports.File({
      filename: 'logs/combined.log',
      format: fileLogFormat, // Use JSON format for the file
    }),

    // Error file transport - JSON-formatted logs for errors only
    new winston.transports.File({
      filename: 'logs/error.log',
      level: 'error',
      format: fileLogFormat, // Use JSON format for the error log
    }),
  ],
});

export default logger;
