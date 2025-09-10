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
        _title = '';
        set title(value) {
            this._title = value;
        }
        get title() {
            return this._title;
        }
    }
    __decorate([
        CapitalizeText()
    ], ServiceOrder.prototype, "title", null);
    const serviceOrder = new ServiceOrder();
    serviceOrder.title = 'ImplEmentar a pipEline dE deplOy do projEto x';
    console.warn(serviceOrder.title);
};
