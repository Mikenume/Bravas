// Fecha límite: 31 de diciembre de 2025 a las 23:59:59
const countdownDate = new Date("December 31, 2025 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = countdownDate - now;

    if (timeLeft < 0) {
        document.getElementById("countdown").innerHTML = "¡Las bravas son gratis!";
        return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Inicializa el contador al cargar la página
updateCountdown();