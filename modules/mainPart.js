export default function mainPart() {
  return `
    <h2>Virtual keyboard made on windows OS</h2>
    <textarea
      name="keyboard-text"
      id="keyboard-text"
      cols="120"
      rows="10">
    </textarea>
    <div class="keyboard-container"></div>
    <p class="desc">Current lang: EN</p>
    <button class="btn">Переключить на русский</button>
    <p class="desc">To switch languages: leftShift + leftAlt</p>
    <p class="desc">из сочетаний клавиш работают только leftShift + leftAlt, тажке работают комбинации leftShift + символы</p>
    <p class="desc">из ES6 используются модули, деструктуризация (96 строка в index), стрелочные функции, шаблонные строки</p>
`;
}
