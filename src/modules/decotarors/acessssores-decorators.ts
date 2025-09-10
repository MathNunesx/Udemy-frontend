export const bootstrap = (): void => {
  function CapitalizeText() {
    return function <T>(
      target: Object,
      propertyKey: string | symbol,
      descriprtor: TypedPropertyDescriptor<T>,
    ) {
      const originalMethod = descriprtor.set as (v: any) => void;
      descriprtor.set = function (this: any, value: T) {
        console.log('--->', value);

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

  class ServiceOrder {
    private _title: string = '';

    @CapitalizeText()
    set title(value: string) {
      this._title = value;
    }

    get title(): string {
      return this._title;
    }
  }

  const serviceOrder = new ServiceOrder();
  serviceOrder.title = 'ImplEmentar a pipEline dE deplOy do projEto x';
  console.warn(serviceOrder.title);
};
