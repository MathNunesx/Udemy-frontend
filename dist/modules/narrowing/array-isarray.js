export const bootstrap = () => {
    let arr = [10, 20, 30];
    console.log('Typeof de array: ', typeof arr);
    console.log('Instanceof de array: ', arr instanceof Array);
    console.log('Array.isArray: ', Array.isArray(arr));
    //   type guard
    //   if (Array.isArray(arr)) {
    //     arr?.map((item) => {
    //       console.log(item);
    //     });
    //   }
    arr?.map((item) => {
        console.log(item);
    });
};
