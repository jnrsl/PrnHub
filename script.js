const heartsContainer = document.getElementById('hearts-container');

function launchHearts() {
  setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 3 + 's';
    heart.style.opacity = Math.random();
    heart.style.transform = `scale(${Math.random() * 1.5 + 0.5}) rotate(45deg)`;
    heartsContainer.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 300);
}

launchHearts();
