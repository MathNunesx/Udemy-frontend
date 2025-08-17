export const bootstrap = () => {
    function createTable({ data, columns }) {
        // console.log(data);
        // console.log(columns);
        const table = document.createElement('table');
        table.setAttribute('border', '1');
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        columns.forEach((column) => {
            const th = document.createElement('th');
            th.textContent = column.header;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        data.forEach((item) => {
            const bodyRow = document.createElement('tr');
            columns.forEach((column) => {
                const td = document.createElement('td');
                td.textContent = String(column.accessor(item));
                bodyRow.appendChild(td);
                tbody.appendChild(bodyRow);
            });
            table.appendChild(tbody);
        });
        return table;
    }
    const games = [
        { id: '1', title: 'COD', price: 350 },
        { id: '2', title: 'Red Dead Redemption', price: 250 },
    ];
    const table = createTable({
        data: games,
        columns: [
            { header: 'ID', accessor: (game) => game.id },
            { header: 'Titulo', accessor: (game) => game.title },
            { header: 'Preço', accessor: (game) => game.price },
        ],
    });
    document.body.appendChild(table);
    const movies = [
        { id: 1, title: 'Gente Grande', genre: 'Comedia', year: 2015 },
        { id: 2, title: 'Vingadores', genre: 'Ação', year: 2012 },
    ];
    const tableMovies = createTable({
        data: movies,
        columns: [
            { header: 'ID', accessor: (movie) => movie.id },
            { header: 'Titulo', accessor: (movie) => movie.title },
            { header: 'Gênero', accessor: (movie) => movie.genre },
            { header: 'Ano', accessor: (movie) => movie.year },
        ],
    });
    document.body.appendChild(tableMovies);
};
