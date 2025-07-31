export const bootstrap = () => {
    class Looger {
        static info(message) {
            console.log(message);
        }
        static warn(message) {
            console.warn(message);
        }
        static error(message) {
            console.error(message);
        }
        // ACESSO NA CLASSE
        static wrapperLogger(type, message) {
            const msg = `${Date.now()} - ${message}`;
            switch (type) {
                case 'INFO':
                    Looger.info(msg);
                    break;
                case 'WARN':
                    Looger.warn(msg);
                    break;
                case 'ERROR':
                    Looger.error(msg);
                    break;
            }
        }
    }
    // ACESSO FORA DA CLASSE
    Looger.info('Acesso publico');
    class LoogerSlack extends Looger {
        static send(message) {
            // ACESSO NA SUBCLASSE
            Looger.info('public');
            Looger.warn('protected');
        }
    }
};
