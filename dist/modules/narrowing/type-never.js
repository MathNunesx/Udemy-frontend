export const bootstrap = () => {
    function throwError(message) {
        throw new Error(message);
    }
    //   throwError('Aplication Interupted. Inside Error');
    console.log('Continued...');
    console.log('Continued...');
    console.log('Continued...');
    function infiniteLoop() {
        let total = 0;
        while (true) {
            const inputText = prompt('Digite um valor numerico: ');
            if (inputText) {
                const inputNumber = parseFloat(inputText);
                if (!isNaN(inputNumber)) {
                    total += inputNumber;
                    console.log(total);
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
