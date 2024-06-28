const display = document.getElementById('display');

function clearDisplay() {
    display.innerText = '';
}

function deleteLastCharacter() {
    display.innerText = display.innerText.slice(0, -1);
}

function appendCharacter(character) {
    display.innerText += character;
}

function calculate() {
    try {
        display.innerText = eval(display.innerText.replace('%', '/100'));
    } catch {
        display.innerText = 'Error';
    }
}
