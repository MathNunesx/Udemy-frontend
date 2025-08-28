export const bootstrap = () => {
    function speakText(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    }
    function extractHTMLElementText(element) {
        const text = element.innerText;
        if (!text) {
            console.error('Elemento não possui texto para ser lido');
            return null;
        }
        return { text, element };
    }
    const one = document.getElementById('course');
    const two = document.querySelector('a');
    document.getElementById('play')?.addEventListener('click', () => {
        if (one) {
            const el = extractHTMLElementText(one);
            if (el) {
                speakText(el.text);
                el.element.style.background = 'cyan';
            }
        }
        // speakText('Uma string qualquer para ser lida');
    });
};
