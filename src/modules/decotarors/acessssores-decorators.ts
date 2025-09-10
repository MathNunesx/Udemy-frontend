export const bootstrap = (): void => {
  function CapitalizeText() {
    return function <T>(
      target: Object,
      propertyKey: string | symbol,
      descriprtor: TypedPropertyDescriptor<T>,
    ) {
      console.log('desciptor set:', descriprtor.set);
      console.log('desciptor get: ', descriprtor.get);

      descriprtor.set = function () {
        console.log('modifamos o comportamento do setter');
      };
      descriprtor.get = function <T>() {
        return 'teste' as T;
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
  serviceOrder.title = 'Implementar a pipeline de deploy do projeto x';
  console.warn(serviceOrder.title);
};
