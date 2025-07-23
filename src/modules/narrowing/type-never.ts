export const bootstrap = (): void => {
  function throwError(message: string): never {
    throw new Error(message);
  }

  //   throwError('Aplication Interupted. Inside Error');
  console.log('Continued...');
  console.log('Continued...');
  console.log('Continued...');

  function infiniteLoop(): never {

    let total: number = 0
    while (true) {
        const inputText = prompt('Digite um valor numerico: ')
        if(inputText){
            const inputNumber = parseFloat(inputText)
            if(!isNaN(inputNumber)){
                total += inputNumber

                console.log(total)
            }
        }
    }
  }

//   infiniteLoop();
  console.log('Continued...');
  console.log('Continued...');
  console.log('Continued...');

  //  fim do fluxo
};
