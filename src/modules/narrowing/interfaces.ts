export const bootstrap = (): void => {
  const input = document.querySelector('.inputText') as HTMLInputElement;

  const video = document.querySelector('#video') as HTMLVideoElement

  input.addEventListener('click', (event: Event) => {
    console.log('Input clicado!! ');
  });

  console.log('filho de:', input.parentNode);

  console.log('Element: ', input.id, input.className, input.tagName);

  console.log('Arrastavek: ', input.draggable);

  console.log('input: ', input.value)

  console.log('Video: ', video.volume)


};
