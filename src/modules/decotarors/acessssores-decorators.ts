export const bootstrap = (): void => {
  function CapitalizeText() {
    return function <T>(
      target: Object,
      propertyKey: string | symbol,
      descriprtor: TypedPropertyDescriptor<T>,
    ) {
      const originalMethod = descriprtor.set as (v: any) => void;
      descriprtor.set = function (this: any, value: T) {
        if (typeof value === 'string') {
          const newValue = value
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

          originalMethod?.apply(this, [newValue]);
        }
      };
      return descriprtor;
    };
  }

  function AddPreFix(prefix: string) {
    return function <T>(
      target: Object,
      propertyKey: string | symbol,
      descriprtor: TypedPropertyDescriptor<T>,
    ) {
      const originalMethod = descriprtor.get as () => T;

      descriprtor.get = function (this: any): T {
        const originalValue = originalMethod.apply(this);
        return `${prefix} ${originalValue}` as T;
      };

      return descriprtor;
    };
  }

  class ServiceOrder {
    private _title: string = '';

    @CapitalizeText()
    @AddPreFix('[Ordem de serviço]')
    set title(value: string) {
      this._title = value;
    }

    get title(): string {
      return this._title;
    }
  }

  const serviceOrder = new ServiceOrder();
  serviceOrder.title = 'Refatorar o Código para que as funções de tratamento de dados sejam convertidas para decoradores';
  console.warn(serviceOrder.title);
};
