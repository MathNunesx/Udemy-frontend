export const bootstrap = (): void => {
  type ConstructorFunction = { new (...args: any[]): {} };

  function AddLogMethod<T extends ConstructorFunction>(constructor: T) {
    console.log('Chegamos no decorador');
    console.log(constructor)

    return class extends constructor {
      loggerInfo = () => {
        console.log(
          `${new Date().toLocaleString('pt-BR')} - ${JSON.stringify(this)}`,
        );
      };
    };
  }

 

  @AddLogMethod
  // class Product {
  //   name: string;
  //   loggerInfo!: () => void
  //   constructor(name: string) {
  //     this.name = name;
  //   }
  // }

   class Person{
    name: string;
    age: number
    loggerInfo!: () => void

    constructor(name: string, age: number){
      this.name = name;
      this.age = age
    }
    
  }

  const person = new Person('Jean', 15)
  console.log(person)
  person.loggerInfo()
};
