import { words } from "./wordsList.js";

(() => {
  const word = words[Math.floor(Math.random() * words.length)];
  console.log(word);
  const WordContainer = document.querySelector(".word-container");
  const keyboard = document.querySelector(".keyboard");

  // generate number of li depending word.length
  let delay = 1;
  for (let char of word) {
    const letterWordContainer = document.createElement("li");
    const letterWord = document.createElement("span");
    letterWordContainer.classList.add("letter-word-container");
    letterWord.classList.add("letter-word", "letter-word-hidden");
    letterWord.innerHTML = char;
    letterWordContainer.appendChild(letterWord);
    WordContainer.appendChild(letterWordContainer);
    setTimeout(() => {
      letterWordContainer.classList.add("a");
    }, delay * 300);
    delay++;
  }

  // generate letters of keyboard
  let char = "a";
  for (let i = 0; i <= 25; i++) {
    const letterKeyboard = document.createElement("button");
    letterKeyboard.classList.add("letter-keyboard");
    setTimeout(() => {
      letterKeyboard.classList.add("letter-keyboard-scaling");
    }, i * 100);
    letterKeyboard.innerHTML = char;
    keyboard.appendChild(letterKeyboard);
    char = String.fromCharCode(char.charCodeAt(0) + 1);
  }

  const lettersKeyboard = document.querySelectorAll(".letter-keyboard");
  let lives = 6;
  const body = document.querySelector(".man");
  const membersBody = document.querySelectorAll(".member-body");
  let indexMembersBody = 0;
  let countLetterFound = 0;
  const lettersWord = document.querySelectorAll(".letter-word-container");
  const msgEnd = document.querySelector(".msg-end");
  const livesTarget = document.querySelector(".lives");
  var audioClicSuccess = new Audio("../assets/audio/clicSuccess.mp3");
  var audioClicError = new Audio("../assets/audio/clicError.mp3");
  var audioBattement = new Audio("../assets/audio/battement.mp3");
  var audioCri = new Audio("../assets/audio/criHangman.mp3");

  lettersKeyboard.forEach((letter) => {
    letter.addEventListener("click", (e) => {
      let letterFound = false;
      for (let i in word) {
        word[i] === e.target.innerHTML.toLowerCase() &&
          (lettersWord[i].firstChild.classList.remove("letter-word-hidden"),
          (letterFound = true),
          countLetterFound++);
      }

      if (!letterFound) {
        audioClicError.play();
        indexMembersBody === 2 || indexMembersBody === 4
          ? membersBody[indexMembersBody].classList.add(
              "apears-arms-foot-right"
            )
          : indexMembersBody === 3 || indexMembersBody === 5
          ? membersBody[indexMembersBody].classList.add("apears-arms-foot-left")
          : membersBody[indexMembersBody].classList.add("apears");
        indexMembersBody++;
        livesTarget.innerHTML = `Lives: ${--lives}`;
        lives === 3 && (audioBattement.play(), (audioBattement.loop = true));
        e.target.classList.add("not-found");
      } else {
        audioClicSuccess.play();
        e.target.classList.add("found");
      }

      e.target.disabled = true;
      e.target.style.pointersEvent = "none";

      (lives === 0 || countLetterFound === word.length) &&
        ((audioBattement.pause(),
        (keyboard.style.pointerEvents = "none"),
        (msgEnd.style.display = "block"),
        msgEnd.classList.add("apears-msg-end")),
        lives === 0 &&
          (audioCri.play(),
          (msgEnd.innerHTML = `game over ! the hidden word: ${word}</br><a href="/hangman"><button class="reset">Restart</button></a>`),
          (msgEnd.style.color = "red"),
          body.classList.add("hang")));
    });
  });
})();