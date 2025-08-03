// Confetti blast on page load
confetti({
  particleCount: 300,
  spread: 120,
  origin: { y: 0.6 },
  ticks: 600
});

// Toggle 3D carousel rotation
function toggleRotation() {
  const carousel = document.getElementById("carousel");
  carousel.classList.toggle("paused");
}

// Secret message password unlock
function checkPassword() {
  const input = document.getElementById("secret-password").value;
  if (input.toLowerCase() === "nrs") {
    window.location.href = "secret.html";
  } else {
    alert("Oops! Wrong password. Try again bestie ✨");
  }
}
