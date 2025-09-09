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
        return (target, propertykey, descriptor) => {
            const originalMethod = descriptor.value;
            let lastExe = 0;
            descriptor.value = function (...args) {
                const now = Date.now();
                if (now - lastExe < limitmiliseconds) {
                    console.error(`O método ${String(propertykey)} só pode ser chamado após ${limitmiliseconds}ms`);
                    descriptor.value = function () { };
                }
                else {
                    lastExe = now;
                    return originalMethod.apply(this, args);
                }
            };
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
        items;
        constructor(items) {
            this.items = items;
        }
        getItems() {
            console.log('Retorna a relação de itens adicionados ao carrinho');
        }
        getItemsFiltered(search, caseIsensitive = true) {
            const itemsFiltered = this.items.filter((item) => {
                if (caseIsensitive) {
                    return item.toLocaleLowerCase().includes(search.toLocaleLowerCase());
                }
                else {
                    return item.includes(search);
                }
            });
            return itemsFiltered;
        }
    }
    __decorate([
        CheckPermissions(['User', 'Admin', 'Super User']),
        RateLimit(3000)
    ], ShoppingCart.prototype, "getItems", null);
    __decorate([
        CheckPermissions(['User', 'Admin', 'Super User'])
    ], ShoppingCart.prototype, "getItemsFiltered", null);
    const shoppingCart = new ShoppingCart(['Smartphone', 'Alexa']);
    document.getElementById('getItems')?.addEventListener('click', () => {
        const itemsFiltered = shoppingCart.getItemsFiltered('Clock', false);
        console.warn(itemsFiltered);
    });
};
