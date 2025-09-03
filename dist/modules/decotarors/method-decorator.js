var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export const bootstrap = () => {
    const UserLogin = {
        username: 'Renk',
        permissions: ['User'],
    };
    function CheckPermissions(requiredPermissions) {
        return (target, propertykey, descriptor) => {
            // console.log(requiredPermissions)
            // target --> classe na qual metodo está sendo definido
            // propertykey --> Nome do método que está sendo decorado
            // descriptor --> descreve as propriedades do método - utilizado para maniipular o método
            // console.log(target, propertykey, descriptor)
            const hasPermission = requiredPermissions.some((permission) => UserLogin.permissions.includes(permission));
            if (!hasPermission) {
                throw new Error(`Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertykey)}`);
            }
            return descriptor;
        };
    }
    class ShoppingCart {
        getItems() {
            console.log('Retorna a relação de itens adicionados ao carrinho');
        }
        deleteItem() {
            console.log('Remove um item do carrinho');
        }
    }
    __decorate([
        CheckPermissions(['User', 'Admin', 'Super User'])
    ], ShoppingCart.prototype, "getItems", null);
    __decorate([
        CheckPermissions(['Admin', 'Super User'])
    ], ShoppingCart.prototype, "deleteItem", null);
    const shoppingCart = new ShoppingCart();
    shoppingCart.getItems();
    shoppingCart.deleteItem();
};
