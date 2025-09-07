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
    function RateLimit(limitmiliseconds) {
        console.log('Decorator RateLimit:', limitmiliseconds);
        return (target, propertykey, descriptor) => {
            console.log(descriptor.value);
            const originalMethod = descriptor.value;
            let lastExe = 0;
            descriptor.value = function () {
                const now = Date.now();
                if (now - lastExe < limitmiliseconds) {
                    console.error(`O método ${String(propertykey)} só pode ser chamado após ${limitmiliseconds}ms`);
                    descriptor.value = function () { };
                }
                else {
                    lastExe = now;
                    return originalMethod.apply(this);
                }
            };
            console.log(descriptor.value);
            return descriptor;
        };
    }
    function CheckPermissions(requiredPermissions) {
        return (target, propertykey, descriptor) => {
            const hasPermission = requiredPermissions.some((permission) => UserLogin.permissions.includes(permission));
            if (!hasPermission) {
                console.error(`Usuário ${UserLogin.username} não tem permissão ${requiredPermissions} para acessar ${String(propertykey)}`);
                descriptor.value = function () { };
            }
            return descriptor;
        };
    }
    class ShoppingCart {
        getItems() {
            console.log('Retorna a relação de itens adicionados ao carrinho');
        }
    }
    __decorate([
        CheckPermissions(['User', 'Admin', 'Super User']),
        RateLimit(3000)
    ], ShoppingCart.prototype, "getItems", null);
    const shoppingCart = new ShoppingCart();
    document.getElementById('getItens')?.addEventListener('click', () => {
        shoppingCart.getItems();
    });
};
