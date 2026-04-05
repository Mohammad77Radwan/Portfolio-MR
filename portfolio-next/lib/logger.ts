/**
 * Production-safe logger utility
 * 
 * In development: logs to console with full details
 * In production: logs critical info only (can be extended to external services)
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: Record<string, unknown>;
}

const isDevelopment = process.env.NODE_ENV === "development";

function formatLogEntry(entry: LogEntry): string {
  const { level, message, timestamp, data } = entry;
  const dataString = data ? ` | ${JSON.stringify(data)}` : "";
  return `[${timestamp}] [${level.toUpperCase()}] ${message}${dataString}`;
}

function createLogEntry(
  level: LogLevel,
  message: string,
  data?: Record<string, unknown>
): LogEntry {
  return {
    level,
    message,
    timestamp: new Date().toISOString(),
    data,
  };
}

function log(
  level: LogLevel,
  message: string,
  data?: Record<string, unknown>
): void {
  const entry = createLogEntry(level, message, data);

  // In development, log everything
  if (isDevelopment) {
    const formatted = formatLogEntry(entry);
    switch (level) {
      case "debug":
        console.debug(formatted);
        break;
      case "info":
        console.info(formatted);
        break;
      case "warn":
        console.warn(formatted);
        break;
      case "error":
        console.error(formatted);
        break;
    }
    return;
  }

  // In production, only log warnings and errors
  if (level === "warn" || level === "error") {
    const formatted = formatLogEntry(entry);
    console[level](formatted);

    // Here you could send to an external logging service like:
    // - Sentry
    // - LogRocket
    // - Datadog
    // - Custom API endpoint
    //
    // Example:
    // sendToExternalService(entry);
  }
}

export const logger = {
  /**
   * Debug level - only logged in development
   * Use for detailed debugging information
   */
  debug: (message: string, data?: Record<string, unknown>) =>
    log("debug", message, data),

  /**
   * Info level - only logged in development
   * Use for general information about application state
   */
  info: (message: string, data?: Record<string, unknown>) =>
    log("info", message, data),

  /**
   * Warning level - logged in all environments
   * Use for potentially problematic situations
   */
  warn: (message: string, data?: Record<string, unknown>) =>
    log("warn", message, data),

  /**
   * Error level - logged in all environments
   * Use for error conditions that should be investigated
   */
  error: (message: string, data?: Record<string, unknown>) =>
    log("error", message, data),

  /**
   * Log a form submission event
   */
  formSubmission: (formName: string, success: boolean, data?: Record<string, unknown>) => {
    const level: LogLevel = success ? "info" : "warn";
    log(level, `Form submission: ${formName}`, { success, ...data });
  },

  /**
   * Log an API call
   */
  apiCall: (endpoint: string, method: string, status: number, duration?: number) => {
    const level: LogLevel = status >= 400 ? "error" : "info";
    log(level, `API ${method} ${endpoint}`, { status, duration });
  },

  /**
   * Log user interaction for analytics
   */
  userAction: (action: string, data?: Record<string, unknown>) => {
    log("info", `User action: ${action}`, data);
  },
};

export default logger;
