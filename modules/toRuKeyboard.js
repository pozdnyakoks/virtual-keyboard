export default function toRuKeyboard() {
  localStorage.lang = 'ru';

  function changeTextContent(attribute, textContent) {
    document.querySelector(attribute).textContent = textContent;
  }

  changeTextContent('[data-key="Backquote"] .first', 'Ё');
  changeTextContent('[data-key="Backquote"] .second', 'Ё');

  changeTextContent('[data-key="Digit2"] .first', '"');

  changeTextContent('[data-key="Digit3"] .first', '№');

  changeTextContent('[data-key="Digit4"] .first', ';');

  changeTextContent('[data-key="Digit6"] .first', ':');

  changeTextContent('[data-key="Digit7"] .first', '?');

  changeTextContent('[data-key="KeyQ"]', 'Й');
  changeTextContent('[data-key="KeyW"]', 'Ц');
  changeTextContent('[data-key="KeyE"]', 'У');
  changeTextContent('[data-key="KeyR"]', 'К');
  changeTextContent('[data-key="KeyT"]', 'Е');
  changeTextContent('[data-key="KeyY"]', 'Н');
  changeTextContent('[data-key="KeyU"]', 'Г');
  changeTextContent('[data-key="KeyU"]', 'Г');
  changeTextContent('[data-key="KeyI"]', 'Ш');
  changeTextContent('[data-key="KeyI"]', 'Ш');
  changeTextContent('[data-key="KeyO"]', 'Щ');
  changeTextContent('[data-key="KeyP"]', 'З');
  changeTextContent('[data-key="BracketLeft"] .first', 'Х');
  changeTextContent('[data-key="BracketLeft"] .second', 'Х');
  changeTextContent('[data-key="BracketRight"] .first', 'Ъ');
  changeTextContent('[data-key="BracketRight"] .second', 'Ъ');
  changeTextContent('[data-key="Backslash"] .first', '/');
  changeTextContent('[data-key="Backslash"] .second', '\\');

  changeTextContent('[data-key="KeyA"]', 'Ф');
  changeTextContent('[data-key="KeyS"]', 'Ы');
  changeTextContent('[data-key="KeyD"]', 'В');
  changeTextContent('[data-key="KeyF"]', 'А');
  changeTextContent('[data-key="KeyG"]', 'П');
  changeTextContent('[data-key="KeyH"]', 'Р');
  changeTextContent('[data-key="KeyJ"]', 'О');
  changeTextContent('[data-key="KeyK"]', 'Л');
  changeTextContent('[data-key="KeyL"]', 'Д');
  changeTextContent('[data-key="Semicolon"] .first', 'Ж');
  changeTextContent('[data-key="Semicolon"] .second', 'Ж');
  changeTextContent('[data-key="Quote"] .first', 'Э');
  changeTextContent('[data-key="Quote"] .second', 'Э');

  changeTextContent('[data-key="IntlBackslash"] .first', '/');
  changeTextContent('[data-key="IntlBackslash"] .second', '\\');
  changeTextContent('[data-key="KeyZ"]', 'Я');
  changeTextContent('[data-key="KeyX"]', 'Ч');
  changeTextContent('[data-key="KeyC"]', 'С');
  changeTextContent('[data-key="KeyV"]', 'М');
  changeTextContent('[data-key="KeyB"]', 'И');
  changeTextContent('[data-key="KeyN"]', 'Т');
  changeTextContent('[data-key="KeyM"]', 'Ь');
  changeTextContent('[data-key="Comma"] .first', 'Б');
  changeTextContent('[data-key="Comma"] .second', 'Б');
  changeTextContent('[data-key="Period"] .first', 'Ю');
  changeTextContent('[data-key="Period"] .second', 'Ю');
  changeTextContent('[data-key="Slash"] .first', ',');
  changeTextContent('[data-key="Slash"] .second', '.');

  changeTextContent('.desc', 'Текущий язык: RU');
  changeTextContent('.btn', 'Switch to English');
}
