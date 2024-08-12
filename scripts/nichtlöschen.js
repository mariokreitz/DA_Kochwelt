function showEasterEgg() {
  document.getElementById("easter-egg-modal").classList.remove("hidden");
  document.getElementById("explosion-effect").classList.remove("hidden");
  launchConfetti();
}

function closeEasterEgg() {
  document.getElementById("easter-egg-modal").classList.add("hidden");
  document.getElementById("explosion-effect").classList.add("hidden");
  window.open(
    "https://www.chefkoch.de/rezepte/1289001234285977/Schokoladen-Cookies-mit-Karamellkern.html",
    "_blank",
  );
}

function launchConfetti() {
  const canvas = document.getElementById("confetti-canvas");
  const confetti = window.confetti;

  const totalParticles = 500; //

  function createConfetti() {
    confetti.create(canvas, { resize: true, useWorker: true })({
      particleCount: totalParticles,
      spread: 180, // Maximale Verbreitung für den gesamten Bildschirm
      origin: { y: 0.5 }, // Mitte des Bildschirms
      colors: ["#ff0", "#0f0", "#00f", "#f00", "#0ff", "#f0f"],
    });
  }

  // Erstes Konfetti
  createConfetti();

  // Zweite Welle mit Verzögerung
  setTimeout(createConfetti, 500); // Verzögerung in Millisekunden
}

document.addEventListener("mousemove", function (e) {
  if (
    e.clientX > window.innerWidth - 100 &&
    e.clientY > window.innerHeight - 100
  ) {
    document.getElementById("easter-egg-button").classList.remove("hidden");
  } else {
    document.getElementById("easter-egg-button").classList.add("hidden");
  }
});
