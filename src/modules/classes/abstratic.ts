export const bootstrap = (): void => {
  interface vehicleInterface {
    type: string;
    description(): string;
  }

  abstract class vehicleAbstract {
    // abstract type: string;
    constructor(protected readonly type: string) {
      this.type = type;
    }
    abstract description(): string;
  }

  // interface é implementada
  class BicycleWithInterface implements vehicleInterface {
    public readonly type: string;
    constructor(type: string) {
      this.type = type;
    }
    description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }

  const bicycleWithInterface = new BicycleWithInterface('Bicicreta');
  console.log(bicycleWithInterface.description());

  // classes abstratas são extendidas
  class BicycleWithAbstract extends vehicleAbstract {
    constructor(type: string) {
      super(type);
    }
    description(): string {
      return `Tipo do veículo: ${this.type}`;
    }
  }

  const bicycleWithAbstract = new BicycleWithAbstract('Moto');
  console.log(bicycleWithAbstract.description());
};
