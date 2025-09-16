var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
export const bootstrap = () => {
    function SomeAction() {
        return (target, propertyKey) => {
            console.log('Executar algo na inicialização da propriedade da classe ');
        };
    }
    function AnotherAction() {
        return (target, propertyKey, parameterIndex) => {
            console.log('target: ', target);
            console.log('propertyKey: ', propertyKey);
            console.log('parameterIndex: ', parameterIndex);
            console.log('Executa algo no parametro decorado');
        };
    }
    class Event {
        date;
        constructor(date) {
            this.date = date;
        }
        checkAviability(test, room) {
            console.log('Verifica disponibilidade do espaço');
        }
    }
    __decorate([
        SomeAction()
    ], Event.prototype, "date", void 0);
    __decorate([
        __param(1, AnotherAction())
    ], Event.prototype, "checkAviability", null);
    const event = new Event(new Date(2025, 11, 25));
    event.date = new Date(2026, 0, 1);
    event.checkAviability('lala', 15);
};
