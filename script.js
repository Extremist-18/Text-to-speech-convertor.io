const text = document.getElementById("textToConvert");
const convertBtn = document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = `Nothing to Convert! 
        Enter text in the text area.`
    }
    
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        // const voices = window.speechSynthesis.getVoices();
        // const indianVoice = voices.find(voice => voice.name.includes('India'));

        // if (indianVoice) {
        //     newUtter.voiceURI = indianVoice.voiceURI;
        // } else {
        //     // console.error('No Indian voice found.');
        //     newUtter.voiceURI = 'Google India English';
        // }
        
        speechSynth.speak(newUtter);
        convertBtn.textContent = "Sound is Playing..."
    }
    
    setTimeout(() => {
        convertBtn.textContent = "Play Sound"
    }, 5000);
});
