var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
export const bootstrap = () => {
    function AddLogMethod(constructor) {
        console.log('Chegamos no decorador');
        console.log(constructor);
        return class extends constructor {
            loggerInfo = () => {
                console.log(`${new Date().toLocaleString('pt-BR')} - ${JSON.stringify(this)}`);
            };
        };
    }
    let Person = 
    // class Product {
    //   name: string;
    //   loggerInfo!: () => void
    //   constructor(name: string) {
    //     this.name = name;
    //   }
    // }
    class Person {
        name;
        age;
        loggerInfo;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    };
    Person = __decorate([
        AddLogMethod
        // class Product {
        //   name: string;
        //   loggerInfo!: () => void
        //   constructor(name: string) {
        //     this.name = name;
        //   }
        // }
    ], Person);
    const person = new Person('Jean', 15);
    console.log(person);
    person.loggerInfo();
};
