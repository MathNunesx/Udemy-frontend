export const bootstrap = () => {
    const x = 'teste';
    console.log('string', typeof x);
    console.log('number', typeof 789);
    console.log('bigint', typeof 123n);
    console.log('symbol', typeof Symbol('teste'));
    console.log('undefined', typeof undefined);
    console.log('object', typeof {});
    console.log('object', typeof Object());
    console.log('array (Object)', typeof []);
    console.log('function', typeof function () { });
};
