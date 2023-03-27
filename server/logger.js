import chalk from 'chalk';
import { formatISO } from 'date-fns';
const getTimestamp = () => {
    return formatISO(Date.now());
};
const getMethodColor = (method) => ({
    'GET': chalk.yellow
})[method];
const logRequest = (request) => {
    const timestamp = getTimestamp();
    const path = request.path;
    const method = request.method;
    const query = request.query;
    const body = request.body;
    const methodColor = getMethodColor(method);
    if (!methodColor) {
        console.log(chalk.red(`Method "${method}" not registered on request logger.`));
        console.log();
        return;
    }
    console.log(`[${timestamp}] [${methodColor(`${method} ${path}`)}]`);
    if (Object.keys(query).length > 0) {
        console.log(chalk.blue('\tQuery parameters:'));
        Object.keys(query).forEach((key) => {
            console.log(`\t\t${key}: ${chalk.blue(query[key])}`);
        });
    }
    if (body) {
        switch (typeof body) {
            case 'string': {
                if (body) {
                    console.log(`\t${chalk.green('Request body:')} ${body}`);
                }
                break;
            }
            default: {
                if (Object.keys(body).length > 0) {
                    console.log(chalk.green('\tRequest body:'));
                    const splitBody = JSON.stringify(body, null, 4).split('\n');
                    splitBody.forEach(line => console.log(`\t\t${line}`));
                }
                break;
            }
        }
    }
    console.log();
};
var LogLevel;
(function (LogLevel) {
    LogLevel["DEBUG"] = "DEBUG";
    LogLevel["INFO"] = "INFO";
    LogLevel["WARN"] = "WARN";
    LogLevel["ERROR"] = "ERROR";
})(LogLevel || (LogLevel = {}));
const getLevelColor = (level) => ({
    [LogLevel.DEBUG]: chalk.white,
    [LogLevel.INFO]: chalk.green,
    [LogLevel.WARN]: chalk.yellow,
    [LogLevel.ERROR]: chalk.red
})[level];
const log = (level, value) => {
    const timestamp = getTimestamp();
    const levelColor = getLevelColor(level);
    console.log(`[${timestamp}] [${levelColor(level)}] ${value}`);
    console.log();
};
const debug = (value) => log(LogLevel.DEBUG, value);
const info = (value) => log(LogLevel.INFO, value);
const warn = (value) => log(LogLevel.WARN, value);
const error = (value) => log(LogLevel.ERROR, value);
const Logger = {
    logRequest,
    debug, info, warn, error
};
export default Logger;
