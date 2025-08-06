export const bootstrap = (): void => {

    type Methods = 'GET' | 'POST' | 'DEL'

  class FormHandler {
    createForm(): HTMLFormElement;
    createForm(inputs: string[]): HTMLFormElement;
    createForm(
      inputs: string[],
      action: string,
      methood?: Methods,
    ): HTMLFormElement;

    // createForm(): HTMLFormElement {
    //   const form = document.createElement('form');
    //   document.body.appendChild(form);

    //   return form;
    // }

    createForm(
      inputs?: string[],
      action?: string,
      methood?: Methods,
    ): HTMLFormElement {
      const form = document.createElement('form');

      if (action) form.setAttribute('action', action);
      if (methood) form.setAttribute('method', methood);

      if (inputs && inputs.length > 0) {
        inputs.map((valor) => {
          const input = document.createElement('input');
          input.setAttribute('type', 'text');
          input.setAttribute('placeholder', valor);

          form.appendChild(input);
        });
      }

      document.body.appendChild(form);
      return form;
    }
  }

  const form = new FormHandler();
  form.createForm();
  form.createForm(['Nome', 'Apelidos']);
  form.createForm(['Nome', 'Apelidos'], '/product', 'POST');
};
