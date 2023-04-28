export default function enKeyboard() {
  document.querySelector('.btn').textContent = 'Переключить на русский'
  document.querySelector('.desc').textContent = 'Current lang: En'
  return `
  <div class="keyboard-container">
      <div class="first-row row">
        <div class="key small-key dark-key" data-key="Backquote">
          <span class="first">~</span><span class="second">\`</span>
        </div>
        <div class="key small-key light-key" data-key="Digit1">
          <span class="first">!</span><span class="second">1</span>
        </div>
        <div class="key small-key light-key" data-key="Digit2">
          <span class="first">@</span><span class="second">2</span>
        </div>
        <div class="key small-key light-key" data-key="Digit3">
          <span class="first">#</span><span class="second">3</span>
        </div>
        <div class="key small-key light-key" data-key="Digit4">
          <span class="first">$</span><span class="second">4</span>
        </div>
        <div class="key small-key light-key" data-key="Digit5">
          <span class="first">%</span><span class="second">5</span>
        </div>
        <div class="key small-key light-key" data-key="Digit6">
          <span class="first">^</span><span class="second">6</span>
        </div>
        <div class="key small-key light-key" data-key="Digit7">
          <span class="first">&</span><span class="second">7</span>
        </div>
        <div class="key small-key light-key" data-key="Digit8">
          <span class="first">*</span><span class="second">8</span>
        </div>
        <div class="key small-key light-key" data-key="Digit9">
          <span class="first">(</span><span class="second">9</span>
        </div>
        <div class="key small-key light-key" data-key="Digit0">
          <span class="first">)</span><span class="second">0</span>
        </div>
        <div class="key small-key light-key" data-key="Minus">
          <span class="first">_</span><span class="second">-</span>
        </div>
        <div class="key small-key light-key" data-key="Equal">
          <span class="first">+</span><span class="second">=</span>
        </div>
        <div class="key long-key dark-key" data-key="Backspace">Backspace</div>
      </div>
      <div class="second-row row">
        <div class="key dark-key middle-key" data-key="Tab">Tab</div>
        <div class="key small-key light-key" data-key="KeyQ">Q</div>
        <div class="key small-key light-key" data-key="KeyW">W</div>
        <div class="key small-key light-key" data-key="KeyE">E</div>
        <div class="key small-key light-key" data-key="KeyR">R</div>
        <div class="key small-key light-key" data-key="KeyT">T</div>
        <div class="key small-key light-key" data-key="KeyY">Y</div>
        <div class="key small-key light-key" data-key="KeyU">U</div>
        <div class="key small-key light-key" data-key="KeyI">I</div>
        <div class="key small-key light-key" data-key="KeyO">O</div>
        <div class="key small-key light-key" data-key="KeyP">P</div>
        <div class="key small-key light-key" data-key="BracketLeft">
          <span class="first">{</span><span class="second">[</span>
        </div>
        <div class="key small-key light-key" data-key="BracketRight">
          <span class="first">}</span><span class="second">]</span>
        </div>
        <div class="key small-key light-key" data-key="Backslash">
          <span class="first">|</span><span class="second">\</span>
        </div>
        <div id="delete1" class="key small-key dark-key" data-key="Delete">
          DEL
        </div>
      </div>
      <div class="third-row row">
        <div class="key dark-key double-key" data-key="CapsLock">Caps Lock</div>
        <div class="key small-key light-key" data-key="KeyA">A</div>
        <div class="key small-key light-key" data-key="KeyS">S</div>
        <div class="key small-key light-key" data-key="KeyD">D</div>
        <div class="key small-key light-key" data-key="KeyF">F</div>
        <div class="key small-key light-key" data-key="KeyG">G</div>
        <div class="key small-key light-key" data-key="KeyH">H</div>
        <div class="key small-key light-key" data-key="KeyJ">J</div>
        <div class="key small-key light-key" data-key="KeyK">K</div>
        <div class="key small-key light-key" data-key="KeyL">L</div>
        <div class="key small-key light-key" data-key="Semicolon">
          <span class="first">:</span><span class="second">;</span>
        </div>
        <div class="key small-key light-key" data-key="Quote">
          <span class="first">"</span><span class="second">'</span>
        </div>
        <div class="key small-key dark-key" data-key="Enter">ENTER</div>
      </div>
      <div class="fourth-row row">
        <div class="key dark-key double-key" data-key="ShiftLeft">Shift</div>
        <div class="key small-key light-key" data-key="IntlBackslash">
          <span class="first">|</span><span class="second">\</span>
        </div>
        <div class="key small-key light-key" data-key="KeyZ">Z</div>
        <div class="key small-key light-key" data-key="KeyX">X</div>
        <div class="key small-key light-key" data-key="KeyC">C</div>
        <div class="key small-key light-key" data-key="KeyV">V</div>
        <div class="key small-key light-key" data-key="KeyB">B</div>
        <div class="key small-key light-key" data-key="KeyN">N</div>
        <div class="key small-key light-key" data-key="KeyM">M</div>
        <div class="key small-key light-key" data-key="Comma">
          <span class="first"><</span><span class="second">,</span>
        </div>
        <div class="key small-key light-key" data-key="Period">
          <span class="first">></span><span class="second">.</span>
        </div>
        <div class="key small-key light-key" data-key="Slash">
          <span class="first">?</span><span class="second">/</span>
        </div>
        <div class="key small-key dark-key" data-key="ArrowUp">▲</div>
        <div class="key small-key dark-key" data-key="ShiftRight">Shift</div>
      </div>
      <div class="five-row row">
        <div class="key dark-key middle-key" data-key="ControlLeft">Ctrl</div>
        <div class="key dark-key small-key" data-key="MetaLeft">Win</div>
        <div class="key dark-key small-key" data-key="AltLeft">Alt</div>
        <div class="key space-key light-key" data-key="Space"></div>
        <div class="key dark-key small-key" data-key="AltRight">Alt</div>
        <div class="key dark-key middle-key" data-key="ControlRight">Ctrl</div>
        <div class="key small-key dark-key" data-key="ArrowLeft">◄</div>
        <div class="key small-key dark-key" data-key="ArrowDown">▼</div>
        <div class="key small-key dark-key" data-key="ArrowRight">►</div>
      </div>
    </div>
  `
}