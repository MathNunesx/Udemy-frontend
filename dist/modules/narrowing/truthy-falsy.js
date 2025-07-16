export const bootstrap = () => {
    const movies = ['Filme', 'filme2', 'Filme3'];
    const movie = movies.find(item => item.includes('Filme'));
    // type guard
    if (movie) {
        console.log(movie);
    }
    else {
        console.warn('Filme n encontrado');
    }
    console.log(movie);
    // falsy
    // console.log(false ? 'truthy' : 'falsy')
    // console.log(0 ? 'truthy' : 'falsy')
    // console.log('' ? 'truthy' : 'falsy')
    // console.log(null) ? 'truthy' : 'falsy')
    // console.log(undefined ? 'truthy' : 'falsy')
    // console.log(NaN ? 'truthy' : 'falsy')
    // truthy
    // console.log(true ? 'truthy' : 'falsy')
    // console.log(-1 ? 'truthy' : 'falsy')
    // console.log(' ' ? 'truthy' : 'falsy')
    // console.log([] ? 'truthy' : 'falsy')
    // console.log({} ? 'truthy' : 'falsy')
};
