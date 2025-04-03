function createFallingHeart() {
  const heart = document.createElement("div");
  heart.classList.add("falling-heart");
  heart.textContent = "❤";
  
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 3) + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Starta efter att hjärtat är färdigritat (3 sekunder)
setTimeout(() => {
  setInterval(createFallingHeart, 200); // skapa ett hjärta var 200ms
}, 3000);
