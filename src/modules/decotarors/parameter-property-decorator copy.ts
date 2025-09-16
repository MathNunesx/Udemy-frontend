export const bootstrap = (): void =>{
    
    function SomeAction(){
        return(target: Object, propertyKey: string | symbol) =>{
            console.log('Executar algo na inicialização da propriedade da classe ')
        }
    }

    function AnotherAction(){
        return (target: Object, propertyKey: string |symbol, parameterIndex: number) => {
            console.log('target: ', target)
            console.log('propertyKey: ', propertyKey)
            console.log('parameterIndex: ', parameterIndex)

            console.log('Executa algo no parametro decorado')

        }
    }
    
    class Event {

       

        @SomeAction()
        date: Date;
        constructor( date: Date){
            this.date = date
        }

        checkAviability(test: string, @AnotherAction()room: number){
        console.log('Verifica disponibilidade do espaço')
        }

    }

    const event = new Event(new Date(2025, 11, 25))
    event.date = new Date(2026, 0, 1)
    event.checkAviability('lala',15)
}