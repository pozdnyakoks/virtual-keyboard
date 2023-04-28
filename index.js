import { toRuKeyboard } from "./modules/toRuKeyboard.js"
import enKeyboard from "./modules/enKeyboard.js";
import mainPart from "./modules/mainPart.js";

document.body.innerHTML = mainPart();
const container = document.querySelector('.keyboard-container')
container.innerHTML = enKeyboard();

if (localStorage.lang) {
  toRuKeyboard();
}

let keysPressed = {};

document.addEventListener('keydown', (ev) => {
  keysPressed[ev.code] = true;
  if (keysPressed['ShiftLeft'] && ev.code === 'AltLeft' || keysPressed['AltLeft'] && ev.code === 'ShiftLeft') {
    if (localStorage.lang === '') {
      toRuKeyboard();
    } else {
      localStorage.lang = '';
      container.innerHTML = enKeyboard();
    }
  }
  document.querySelector(`[data-key="${ev.code}"]`).classList.add('highlighted')
})

document.addEventListener('keyup', (ev) => {
  document.querySelector(`[data-key="${ev.code}"]`).classList.remove('highlighted')
  delete keysPressed[ev.code];
})

document.querySelector('.btn').addEventListener('click', () => {
  if (localStorage.lang === '') {
    toRuKeyboard();
  } else {
    localStorage.lang = '';
    container.innerHTML = enKeyboard();
  }
})

