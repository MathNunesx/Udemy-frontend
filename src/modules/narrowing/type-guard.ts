export const bootstrap = (): void => {
  const zipCodeMask = (value: string | number): string => {

    if(typeof value === 'number'){
        value = value.toString()
    }
    value = value.replace(/\D/g, '');
    value = value.replace(/(\d{5})(\d)/, '$1-$2');

    return value;
  };

  const zipCode = zipCodeMask('100000000'); // cep 100000-00
  console.log(zipCode)

  const zipCode2 = zipCodeMask('300000000'); // cep 100000-00
  console.log(zipCode2)


};
