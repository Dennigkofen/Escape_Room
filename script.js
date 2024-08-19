// Beispielcodes für die 10 Rätsel
const codes = {
    code1: '50328',
    code2: '38129',
    code3: '93638',
    code4: '84810',
    code5: '21468',
    code6: '32460',
    code7: '29357',
    code8: '73625',
    code9: '42138',
    code10: '09863'
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
