export const bootstrap = () => {
    function speakText(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'pt-BR';
        window.speechSynthesis.speak(utterance);
    }
    document.getElementById('play')?.addEventListener('click', () => {
        speakText('Uma string qualquer para ser lida');
    });
};
