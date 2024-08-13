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

const inputs = [
    'input1', 'input2', 'input3', 'input4', 'input5', 
    'input6', 'input7', 'input8', 'input9', 'input10'
];

function checkCode(inputId, riddleId, codeKey) {
    const userInput = document.getElementById(inputId).value;
    const riddleDiv = document.getElementById(riddleId);
    const inputField = document.getElementById(inputId);

    if (userInput === codes[codeKey]) {
        riddleDiv.classList.add('solved');
        riddleDiv.classList.remove('incorrect'); // Entfernt das Rot bei korrekten Antworten
        riddleDiv.querySelector('button').disabled = true;  // Optional: Deaktivierung des Buttons
        riddleDiv.querySelector('label').textContent += " - Rätsel gelöst";
        checkAllSolved(); // Überprüft, ob alle Rätsel gelöst wurden
    } else {
        riddleDiv.classList.add('incorrect');
        riddleDiv.classList.remove('solved'); // Entfernt das Grün bei falschen Antworten
        inputField.focus(); // Fokussiert das Eingabefeld, wenn die Antwort falsch ist
    }
}

function checkAllSolved() {
    const allSolved = inputs.every(id => {
        const input = document.getElementById(id);
        return input.value === codes[id.replace('input', 'code')];
    });

    if (allSolved) {
        setTimeout(() => {
            window.location.href = 'success.html'; // Weiterleitung zur Erfolgsseite
        }, 1000); // 1 Sekunde Verzögerung für besseres Benutzererlebnis
    }
}
