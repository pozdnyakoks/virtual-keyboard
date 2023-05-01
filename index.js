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

function listener(event) {
  document.addEventListener(event, (ev) => {
    const info = event === 'click' ? ev.target.dataset.key : ev.code;
    const target = document.querySelector(`[data-key="${info}"]`);
    const key = event === 'click' ? info : target.dataset.key;
    if (event === 'keydown') {
      textarea.blur();
      keysPressed[info] = true;
      if ((keysPressed.ShiftLeft && info === 'AltLeft') || (
        keysPressed.AltLeft && info === 'ShiftLeft')) {
        if (localStorage.lang === '') {
          toRuKeyboard();
        } else {
          localStorage.lang = '';
          container.innerHTML = enKeyboard();
        }
      }
    }
    let sym = '';
    switch (key) {
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

    if (key === 'CapsLock') {
      toUpperCase = !toUpperCase;
    }

    if (key === 'Backspace') {
      textarea.setRangeText('', textarea.selectionStart - 1, textarea.selectionEnd, 'end');
    }
    if (key === 'Delete') {
      textarea.setRangeText('', textarea.selectionStart, textarea.selectionEnd + 1, 'end');
    }

    if (event === 'click') {
      if (ev.target.classList.contains('second-key') || ev.target.parentElement.classList.contains('second-key')) {
        if (keysPressed.ShiftLeft || keysPressed.ShiftRight) {
          if (ev.target.firstElementChild?.classList.contains('first')) {
            sym = ev.target.firstElementChild.textContent.trim();
          } else {
            sym = ev.target.classList.contains('first')
              ? ev.target.textContent.trim()[0]
              : ev.target.parentElement.textContent.trim()[0];
          }
        } else {
          sym = ev.target.textContent.trim()[1] ?? ev.target.parentElement.textContent.trim()[1];
        }
      } else if (ev.target.classList.contains('symbol')) {
        sym = ev.target.textContent.trim();
      }
      if (target) {
        target.classList.add('highlighted');
        target.addEventListener('mouseout', () => {
          target.classList.remove('highlighted');
        });
      }
    } else if (event === 'keydown') {
      if (target.classList.contains('second-key')) {
        const [first, second] = target.textContent.trim();
        if (keysPressed.ShiftLeft || keysPressed.ShiftRight) {
          sym = first;
        } else {
          sym = second;
        }
      } else if (target.classList.contains('symbol')) {
        sym = target.textContent.trim();
      }
      document.querySelector(`[data-key="${info}"]`).classList.add('highlighted');
    }

    if (toUpperCase && (keysPressed.ShiftLeft || keysPressed.ShiftRight)) {
      sym = sym.toLowerCase();
    } else if (!toUpperCase && (keysPressed.ShiftLeft || keysPressed.ShiftRight)) {
      sym = sym.toUpperCase();
    } else if (!toUpperCase) {
      sym = sym.toLowerCase();
    } else {
      sym = sym.toUpperCase();
    }

    textarea.setRangeText(sym, textarea.selectionStart, textarea.selectionEnd, 'end');
  });
}

listener('click');
listener('keydown');
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
