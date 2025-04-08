function openLetter() {
  document.querySelector('.envelope').style.display = 'none';
  const letter = document.querySelector('.letter');
  letter.classList.remove('hidden');

  const lines = document.querySelectorAll('.line');
  let delay = 0;

  lines.forEach((line, index) => {
    setTimeout(() => {
      const text = line.getAttribute('data-text');
      line.textContent = text;
      line.style.opacity = 1;

      // Skapa hjärta som flyger upp
      const heart = document.createElement('div');
      heart.textContent = '💖';
      heart.className = 'heart';
      heart.style.left = `${50 + Math.random() * 50}%`;
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 2000);
    }, delay);

    delay += 2500; // Vänta lite innan nästa rad skrivs
  });
}

// Stil för hjärtan
const style = document.createElement('style');
style.textContent = `
.heart {
  position: absolute;
  top: 60%;
  font-size: 2rem;
  animation: floatUp 2s ease-in;
  pointer-events: none;
}

@keyframes floatUp {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-150px); opacity: 0; }
}
`;
document.head.appendChild(style);
