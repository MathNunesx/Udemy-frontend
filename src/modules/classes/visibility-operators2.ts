export const bootstrap = (): void => {
  class Looger {
    public static info(message: string): void {
      console.log(message);
    }

    protected static warn(message: string): void {
      console.warn(message);
    }

    private static error(message: string): void {
      console.error(message);
    }

    // ACESSO NA CLASSE

    public static wrapperLogger(
      type: 'INFO' | 'WARN' | 'ERROR',
      message: string,
    ): void {
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
    public static send(message: string): void {
      // ACESSO NA SUBCLASSE

      Looger.info('public');
      Looger.warn('protected');
    }
  }
};
