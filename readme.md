# Express Server with Winston Logging

This project sets up a basic Express server with integrated logging using the `winston` library. The logger records both requests and application events, saving logs to both the console and a file.

## Features:
- **Express Server**: A simple Express server running on port 3000.
- **Winston Logger**: Configured to log information to both the console and a file.
  - Logs all incoming requests (method and URL).
  - Logs server start-up and route accesses.
- **Logging Format**: Logs are saved in a readable format with timestamps in the log file (`logs/app.log`).

### Example Log Entries:
- **Console Logs**: Simple log output in the terminal.
- **Log File (`logs/app.log`)**: Logs are saved with a timestamp in the following format:

   ```
   2024-12-06T12:00:00.000Z [info]: Request received: GET /
   2024-12-06T12:00:00.000Z [info]: Root route accessed
   2024-12-06T12:00:00.000Z [info]: server run on port 3000
   ```

### Default Routes:
- **GET /**: Returns "hello" and logs the request.

## Configuration:
- **Log Levels**: The logger is set to `info` level by default, meaning it will log all `info` and higher-level messages (e.g., `warn`, `error`).
- **Log File**: All logs are saved in `logs/app.log` under the `info` level.

You can customize the logger by adjusting the `winston.createLogger` configuration or change log levels as per your project’s requirements.

## Notes:
- Logs are saved in a file in the project directory under `logs/app.log`. Make sure you have write permissions to this folder.
- For production environments, consider rotating logs using additional `winston` transports like `winston-daily-rotate-file`.

For more information on configuring and using `winston`, refer to the [Winston documentation](https://github.com/winstonjs/winston).