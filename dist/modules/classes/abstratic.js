export const bootstrap = () => {
    class vehicleAbstract {
        type;
        // abstract type: string;
        constructor(type) {
            this.type = type;
            this.type = type;
        }
    }
    // interface é implementada
    class BicycleWithInterface {
        type;
        constructor(type) {
            this.type = type;
        }
        description() {
            return `Tipo do veículo: ${this.type}`;
        }
    }
    const bicycleWithInterface = new BicycleWithInterface('Bicicreta');
    console.log(bicycleWithInterface.description());
    // classes abstratas são extendidas
    class BicycleWithAbstract extends vehicleAbstract {
        constructor(type) {
            super(type);
        }
        description() {
            return `Tipo do veículo: ${this.type}`;
        }
    }
    const bicycleWithAbstract = new BicycleWithAbstract('Moto');
    console.log(bicycleWithAbstract.description());
};
