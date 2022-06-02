import { words } from "./wordsList.js";

const word = words[Math.floor(Math.random() * words.length)];
const WordContainer = document.querySelector(".word-container");

for (let char of word) {
  const letterWordContainer = document.createElement("li");
  letterWordContainer.classList.add("letter-word-container");
  const letterWord = document.createElement("span");
  letterWord.classList.add("letter-word", "letter-word-hidden");
  letterWord.innerHTML = char;
  letterWordContainer.appendChild(letterWord);
  WordContainer.appendChild(letterWordContainer);
}

const keyboard = document.querySelector(".keyboard");
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

let lives = 6;
const body = document.querySelector(".man");
const membersBody = document.querySelectorAll(".member-body");
let indexMembersBody = 0;

let countLetterFound = 0;
const lettersKeyboard = document.querySelectorAll(".letter-keyboard");
const lettersWord = document.querySelectorAll(".letter-word-container");
const msgEnd = document.querySelector(".msg-end");
const livesTarget = document.querySelector(".lives");
for (let letter of lettersKeyboard) {
  letter.addEventListener("click", (e) => {
    let letterFound = false;
    for (let i in word) {
      word[i] === e.target.innerHTML.toLowerCase() &&
        (lettersWord[i].firstChild.classList.remove("letter-word-hidden"),
        (letterFound = true),
        countLetterFound++);
    }

    if (!letterFound) {
      switch (indexMembersBody) {
        case 2:
        case 4:
          membersBody[indexMembersBody].classList.add("apears-arms-foot-right");
          break;
        case 3:
        case 5:
          membersBody[indexMembersBody].classList.add("apears-arms-foot-left");
          break;
        default:
          membersBody[indexMembersBody].classList.add("apears");
          break;
      }
      indexMembersBody++;
      livesTarget.innerHTML = `Lives: ${--lives}`;
      e.target.classList.add("not-found");
    } else {
      e.target.classList.add("found");
    }

    e.target.disabled = true;

    (lives === 0 || countLetterFound === word.length) &&
      ((keyboard.style.zIndex = "-1"),
      (msgEnd.style.display = "block"),
      msgEnd.classList.add("apears-msg-end")),
      lives === 0 &&
        ((msgEnd.innerHTML = `game over ! the hidden word: ${word}</br><a href="/hangman"><button class="reset">Restart</button></a>`),
        (msgEnd.style.color = "red"),
        body.classList.add("hang"));
  });
}
