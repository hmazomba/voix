const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

const greetings = [
  "Im good you piece of crap!",
  "Whats good baby!",
  "What up doe",
  "You know what grinds my gears? Being stuck inside this laptop"
];

const weather = [
  "It is hotter than Satans balls",
  "Colder than your girlfriend on her period",
  "chilly like jalapenos",
  "Do I look like a meteorologist?"
];
recognition.onstart = function() {
  console.log("voice activated. Speak into Microphone");
};

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
};

//add listener to button

btn.addEventListener("click", () => {
  recognition.start();
});

function readOutLoud(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "what are you saying";

  if (message.includes("hello", "how are you")) {
    const finalText = greetings[Math.floor(Math.random() * greetings.length)];
    speech.text = finalText;
  }

  if (message.includes("weather", "how is the weather")) {
    const finalText = weather[Math.floor(Math.random() * weather.length)];
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}
