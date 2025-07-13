export const bootstrap = (): void =>{

    console.log('Int - Max safe: ', Number.MAX_SAFE_INTEGER)
    console.log('Int - Minium safe: ', Number.MIN_SAFE_INTEGER)

    let bigintNumber: bigint = 9007199254740991n
    console.log('Atri com sufixo n: ', bigintNumber)

    let bigintNumber2: bigint = BigInt('9007199254740991')
    console.log('Atri com o construtor Bigint')


}