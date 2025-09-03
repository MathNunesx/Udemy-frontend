export const bootstrap = (): void => {
  const UserLogin = {
    username: 'Renk',
    permissions: ['User'],
  };

  function CheckPermissions(requiredPermissions: string[]): MethodDecorator {
    return (target, propertykey, descriptor) => {
      // console.log(requiredPermissions)

      // target --> classe na qual metodo está sendo definido
      // propertykey --> Nome do método que está sendo decorado
      // descriptor --> descreve as propriedades do método - utilizado para maniipular o método
      // console.log(target, propertykey, descriptor)

      const hasPermission = requiredPermissions.some((permission) =>
        UserLogin.permissions.includes(permission)
      )

      if(!hasPermission){
        throw new Error(`Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertykey)}`)
      }

      return descriptor;
    };
  }

  class ShoppingCart {
    @CheckPermissions(['User', 'Admin', 'Super User'])
    getItems() {
      console.log('Retorna a relação de itens adicionados ao carrinho');
    }

    @CheckPermissions(['Admin', 'Super User'])
    deleteItem(){
        console.log('Remove um item do carrinho')
    }
  }

  const shoppingCart = new ShoppingCart();
  shoppingCart.getItems()
  shoppingCart.deleteItem()
};
