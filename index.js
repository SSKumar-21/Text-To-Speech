let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector(".select"); 

window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    voiceSelect.innerHTML = ""; 
    voices.forEach((voice, i) => {
        const option = document.createElement("option");
        option.text = voice.name;
        option.value = i;
        voiceSelect.add(option);
    });
    speech.voice = voices[0];
}

document.getElementById("btn").addEventListener("click", function () {
    speech.text = document.querySelector("textarea").value;
    speech.voice = voices[voiceSelect.selectedIndex];
    window.speechSynthesis.speak(speech);
    console.log(speech.text);
});
