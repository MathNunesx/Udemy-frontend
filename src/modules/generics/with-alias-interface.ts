export const bootstrap = (): void => {
  function createTable(): HTMLTableElement {
    const table = document.createElement('table');
    table.setAttribute('border', '1');

    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    const th = document.createElement('th');
    th.textContent = 'Titulo';

    headerRow.appendChild(th);
    thead.appendChild(headerRow);
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const bodyRow = document.createElement('tr');
    const td = document.createElement('td');
    td.textContent = 'Conteudo';

    bodyRow.appendChild(td);
    tbody.appendChild(bodyRow);
    table.appendChild(tbody);

    return table;
  }

  const table = createTable();
  document.body.appendChild(table);

  // <table border="1">
  //     <thead>
  //         <tr>
  //             <th> Título </td>
  //         </tr>
  //     </tbody>
  // </table>
};
