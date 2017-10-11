module.exports = {
    appenders: {
        allLogs: { type: 'file', filename: './logs/app.log' },
        infoLogging: { type: 'file', filename: './logs/app-info.log' },
        'info': { type: 'logLevelFilter', appender: 'infoLogging', level: 'info' },
        console: { type: 'console' },
        errorLogging: { type: 'file', filename: './logs/app-error.log' },
        'error': { type: 'logLevelFilter', appender: 'errorLogging', level: 'error' },
        console: { type: 'console' }
    },
    categories: {
        default: { appenders: ['info', 'allLogs', 'error', 'console'], level: 'debug' }
    }
};
