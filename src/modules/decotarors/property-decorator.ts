export const bootstrap = (): void =>{
    
    function somaAction(){
        return(target: Object, propertyKey: string | symbol) =>{
            console.log(target)
            console.log(propertyKey)
            console.log('Executar algo na inicialização da propriedade da classe ')
        }
    }

    
    class Event {

       

        @somaAction()
        date: Date;
        constructor( date: Date){
            this.date = date
        }
    }

    const event = new Event(new Date(2025, 11, 25))
    console.log(event)
    event.date = new Date(2026, 0, 1)
}