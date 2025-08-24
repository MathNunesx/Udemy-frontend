export const bootstrap = () => {
    // Promise
    // type predicates
    function isGameArray(data) {
        return (Array.isArray(data) &&
            data.every((item) => typeof item.id === 'number' &&
                typeof item.title === 'string' &&
                typeof item.genre === 'string' &&
                typeof item.number === 'number'));
    }
    fetch('https://argus-academy.com/mock/api/games/')
        .then((response) => {
        if (!response.ok) {
            console.error('Error HTTP: ', `${response.status} - ${response.statusText}`);
        }
        // type assertion
        // return response.json() as Promise<[Game]>;
        return response.json();
    })
        .then((data) => {
        if (isGameArray(data)) {
            // console.log(data);
        }
        else {
            console.error('tipo de dado incorreto');
        }
    });
    // type predicates
    function isCarArray(data) {
        return (Array.isArray(data) &&
            data.every((item) => typeof item.id === 'number' &&
                typeof item.model === 'string' &&
                typeof item.year === 'number' &&
                typeof item.type === 'string'));
    }
    fetch('https://argus-academy.com/mock/api/cars/')
        .then((response) => {
        if (!response.ok) {
            console.error('Error HTTP: ', `${response.status} - ${response.statusText}`);
        }
        // type assertion
        // return response.json() as Promise<[Game]>;
        return response.json();
    })
        .then((data) => {
        if (isCarArray(data)) {
            console.log(data[0].model);
        }
        else {
            console.error('tipo de dado incorreto');
        }
    });
};
