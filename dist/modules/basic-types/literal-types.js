// let logType: string = 'info'
// logType = 'warn'
// let logType: 'info'
// logType = 'info'
export function logger(type, message) {
    switch (type) {
        case 'info':
            console.log(`info: ${message}`);
            break;
        case 'warn':
            console.warn(`info: ${message}`);
            break;
        case 'error':
            console.error(`error: ${message}`);
            break;
    }
}
logger('error', 'Log com alguma informação sobre o que houve!');
