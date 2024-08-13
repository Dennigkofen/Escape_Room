// Beispielcodes für die 10 Rätsel
const codes = {
    code1: '1234',
    code2: '5678',
    code3: '91011',
    code4: '1213',
    code5: '1415',
    code6: '1617',
    code7: '1819',
    code8: '2021',
    code9: '2223',
    code10: '2425'
};

function checkCode(inputId, riddleId, codeKey) {
    const userInput = document.getElementById(inputId).value;
    const riddleDiv = document.getElementById(riddleId);

    if (userInput === codes[codeKey]) {
        riddleDiv.classList.add('solved');
        riddleDiv.querySelector('button').disabled = true;  // Optionale Deaktivierung des Buttons
        riddleDiv.querySelector('label').textContent += " - Rätsel gelöst";
    } else {
        riddleDiv.classList.remove('solved');  // Falls man die Farbe zurücksetzen möchte
    }
}
