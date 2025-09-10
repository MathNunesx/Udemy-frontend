var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export const bootstrap = () => {
    function CapitalizeText() {
        return function (target, propertyKey, descriprtor) {
            const originalMethod = descriprtor.set;
            descriprtor.set = function (value) {
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
    function AddPreFix(prefix) {
        return function (target, propertyKey, descriprtor) {
            const originalMethod = descriprtor.get;
            descriprtor.get = function () {
                const originalValue = originalMethod.apply(this);
                return `${prefix} ${originalValue}`;
            };
            return descriprtor;
        };
    }
    class ServiceOrder {
        _title = '';
        set title(value) {
            this._title = value;
        }
        get title() {
            return this._title;
        }
    }
    __decorate([
        CapitalizeText(),
        AddPreFix('[Ordem de serviço]')
    ], ServiceOrder.prototype, "title", null);
    const serviceOrder = new ServiceOrder();
    serviceOrder.title = 'Refatorar o Código para que as funções de tratamento de dados sejam convertidas para decoradores';
    console.warn(serviceOrder.title);
};
