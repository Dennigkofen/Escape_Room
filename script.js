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
    const inputField = document.getElementById(inputId);

    if (userInput === codes[codeKey]) {
        riddleDiv.classList.add('solved');
        riddleDiv.classList.remove('incorrect'); // Entfernt das Rot bei korrekten Antworten
        riddleDiv.querySelector('button').disabled = true;  // Optional: Deaktivierung des Buttons
        riddleDiv.querySelector('label').textContent += " - Rätsel gelöst";
    } else {
        riddleDiv.classList.add('incorrect');
        riddleDiv.classList.remove('solved'); // Entfernt das Grün bei falschen Antworten
        inputField.focus(); // Fokussiert das Eingabefeld, wenn die Antwort falsch ist
    }
}

// Timer-Funktionalität
let timerStart = Date.now();
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = Date.now();
    const elapsed = now - timerStart;

    // Zeit in Stunden, Minuten und Sekunden umrechnen
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

    // Zeit formatieren (HH:MM:SS)
    const formattedTime = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
    ].join(':');

    // Timer anzeigen
    timerElement.textContent = `Zeit: ${formattedTime}`;
}

// Timer jede Sekunde aktualisieren
setInterval(updateTimer, 1000);
