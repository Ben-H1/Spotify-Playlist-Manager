import chalk from 'chalk';
import { formatISO } from 'date-fns';
import { Request } from 'express';

const getTimestamp = () => {
    return formatISO(Date.now());
};

const getMethodColor = (method: string) => ({
    'GET': chalk.yellow
})[method] ?? chalk.white;

const logRequest = (request: Request) => {
    const timestamp = getTimestamp();

    const { path, method, query, body } = request;

    const methodColor = getMethodColor(method);

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

enum LogLevel {
    DEBUG = 'DEBUG',
    INFO = 'INFO',
    WARN = 'WARN',
    ERROR = 'ERROR'
}

const getLevelColor = (level: LogLevel) => ({
    [LogLevel.DEBUG]: chalk.white,
    [LogLevel.INFO]: chalk.green,
    [LogLevel.WARN]: chalk.yellow,
    [LogLevel.ERROR]: chalk.red
})[level];

const log = (level: LogLevel, value: any) => {
    const timestamp = getTimestamp();
    const levelColor = getLevelColor(level);

    console.log(`[${timestamp}] [${levelColor(level)}] ${value}`);
    console.log();
};

const debug = (value: any) => log(LogLevel.DEBUG, value);
const info = (value: any) => log(LogLevel.INFO, value);
const warn = (value: any) => log(LogLevel.WARN, value);
const error = (value: any) => log(LogLevel.ERROR, value);

const Logger = {
    logRequest,
    debug, info, warn, error
};

export default Logger;
