export const bootstrap = (): void => {
  const UserLogin = {
    username: 'Renk',
    permissions: ['User'],
  };

  function RateLimit(limitmiliseconds: number): MethodDecorator {
    console.log('Decorator RateLimit:', limitmiliseconds);
    return <T>(
      target: Object,
      propertykey: string | symbol,
      descriptor: TypedPropertyDescriptor<T>,
    ) => {
      console.log(descriptor.value);
      const originalMethod = descriptor.value as () => T;
      let lastExe = 0;

      descriptor.value = function (this: any) {
        const now = Date.now();

        if (now - lastExe < limitmiliseconds) {
          console.error(
            `O método ${String(propertykey)} só pode ser chamado após ${limitmiliseconds}ms`,
          );
          descriptor.value = function () {} as T;
        } else {
          lastExe = now;
          return originalMethod.apply(this);
        }
      } as T;

      console.log(descriptor.value);
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
    @CheckPermissions(['User', 'Admin', 'Super User'])
    @RateLimit(3000)
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }
  }

  const shoppingCart = new ShoppingCart();
  document.getElementById('getItens')?.addEventListener('click', () => {
    shoppingCart.getItems();
  });
};
