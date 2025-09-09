export const bootstrap = (): void => {
  const UserLogin = {
    username: 'Renk',
    permissions: ['User'],
  };

  function RateLimit(limitmiliseconds: number): MethodDecorator {
    return <T>(
      target: Object,
      propertykey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      const originalMethod = descriptor.value as (...args: any[]) => T;
      let lastExe = 0;

      descriptor.value = function (this: any, ...args:[]) {
        const now = Date.now();

        if (now - lastExe < limitmiliseconds) {
          console.error(
            `O método ${String(propertykey)} só pode ser chamado após ${limitmiliseconds}ms`,
          );
          descriptor.value = function () {} as T;
        } else {
          lastExe = now;
          return originalMethod.apply(this, args);
        }
      } as T;

      return descriptor;
    };
  }

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    return <T>(
      target: Object,
      propertykey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission),
      );

      if (!hasPermission) {
        console.error(
          `Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertykey)}`,
        );

        descriptor.value = function () {} as T;
      }

      return descriptor;
    };
  }

  class ShoppingCart {
    constructor(private readonly items: string[]) {}
    @CheckPermissions(['User', 'Admin', 'Super User'])
    @RateLimit(3000)
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }

    @CheckPermissions(['User', 'Admin', 'Super User'])
    getItemsFiltered(search: string, caseIsensitive: boolean = true): string[] {
      const itemsFiltered = this.items.filter((item) => {
        if (caseIsensitive) {
          return item.toLocaleLowerCase().includes(search.toLocaleLowerCase());
        } else {
          return item.includes(search);
        }
      });
      return itemsFiltered;
    }
  }

  const shoppingCart = new ShoppingCart(['Smartphone', 'Alexa']);
  document.getElementById('getItems')?.addEventListener('click', () => {
    const itemsFiltered = shoppingCart.getItemsFiltered('Clock', false);
    console.warn(itemsFiltered);
  });
};
