import toRuKeyboard from './modules/toRuKeyboard.js';
import enKeyboard from './modules/enKeyboard.js';
import mainPart from './modules/mainPart.js';

document.body.innerHTML = mainPart();
const container = document.querySelector('.keyboard-container');
container.innerHTML = enKeyboard();
const textarea = document.getElementById('keyboard-text');

if (localStorage.lang) {
  toRuKeyboard();
}

const keysPressed = {};
let toUpperCase = false;

document.addEventListener('keydown', (ev) => {
  keysPressed[ev.code] = true;
  if ((keysPressed.ShiftLeft && ev.code === 'AltLeft') || (keysPressed.AltLeft && ev.code === 'ShiftLeft')) {
    if (localStorage.lang === '') {
      toRuKeyboard();
    } else {
      localStorage.lang = '';
      container.innerHTML = enKeyboard();
    }
  }

  if (ev.target.dataset.key === 'CapsLock') {
    toUpperCase = !toUpperCase;
  }

  textarea.focus();
  document.querySelector(`[data-key="${ev.code}"]`).classList.add('highlighted');
});

document.addEventListener('click', (ev) => {
  let sym = '';
  const target = document.querySelector(`[data-key="${ev.target.dataset.key}"]`);

  if (ev.target.dataset.key === 'CapsLock') {
    toUpperCase = !toUpperCase;
  }

  if (target) {
    target.classList.add('highlighted');
    target.addEventListener('mouseout', () => {
      target.classList.remove('highlighted');
    });
  }

  switch (ev.target.dataset.key) {
    case 'Space':
      sym = ' ';
      break;
    case 'Tab':
      sym = '\t';
      break;
    case 'Enter':
      sym = '\n';
      break;
    case 'ArrowUp':
      sym = '▲';
      break;
    case 'ArrowLeft':
      sym = '◄';
      break;
    case 'ArrowDown':
      sym = '▼';
      break;
    case 'ArrowRight':
      sym = '►';
      break;
    default: sym = '';
  }

  if (ev.target.dataset.key === 'Backspace') {
    textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
  }
  if (ev.target.dataset.key === 'Delete') {
    textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
  }

  if (ev.target.classList.contains('second-key') || ev.target.parentElement.classList.contains('second-key')) {
    const [first, second] = ev.target.textContent.trim();
    const [firstParent, secondParent] = ev.target.parentElement.textContent.trim();
    const [firstChild] = ev.target.firstElementChild.textContent.trim();
    if (keysPressed.ShiftLeft || keysPressed.ShiftRight) {
      if (ev.target.firstElementChild?.classList.contains('first')) {
        sym = firstChild;
      } else {
        sym = ev.target.classList.contains('first')
          ? first
          : firstParent;
      }
    } else {
      sym = second || secondParent;
    }
  } else if (ev.target.classList.contains('symbol')) {
    sym = ev.target.textContent;
  }
  console.log(sym);

  textarea.focus();
  textarea.setRangeText(toUpperCase ? sym.toUpperCase() : sym.toLowerCase(), textarea.selectionStart, textarea.selectionEnd, 'end');
});

document.addEventListener('keyup', (ev) => {
  document.querySelector(`[data-key="${ev.code}"]`).classList.remove('highlighted');
  delete keysPressed[ev.code];
});

document.querySelector('.btn').addEventListener('click', () => {
  if (localStorage.lang === '') {
    toRuKeyboard();
  } else {
    localStorage.lang = '';
    container.innerHTML = enKeyboard();
  }
});
