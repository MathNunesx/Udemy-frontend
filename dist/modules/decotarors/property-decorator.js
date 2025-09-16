var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export const bootstrap = () => {
    function somaAction() {
        return (target, propertyKey) => {
            console.log(target);
            console.log(propertyKey);
            console.log('Executar algo na inicialização da propriedade da classe ');
        };
    }
    class Event {
        date;
        constructor(date) {
            this.date = date;
        }
    }
    __decorate([
        somaAction()
    ], Event.prototype, "date", void 0);
    const event = new Event(new Date(2025, 11, 25));
    console.log(event);
    event.date = new Date(2026, 0, 1);
};
