// Initialisiere das Feuerwerk
const canvas = document.getElementById('fireworks');
const fireworks = new Fireworks(canvas, {});

fireworks.start();

// Stoppe das Feuerwerk nach 10 Sekunden
setTimeout(() => {
    fireworks
