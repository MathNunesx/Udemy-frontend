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
};
