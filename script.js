const heartsContainer = document.getElementById('hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Random horizontal position within viewport width
  heart.style.left = Math.random() * window.innerWidth + 'px';

  // Start near bottom (just out of view)
  heart.style.top = window.innerHeight + 30 + 'px';

  // Random animation duration between 4-8 seconds
  heart.style.animationDuration = (4 + Math.random() * 4) + 's';

  heartsContainer.appendChild(heart);

  // Remove the heart element after animation ends to keep DOM clean
  heart.addEventListener('animationend', () => {
    heart.remove();
  });
}

// Create hearts every 300ms
setInterval(createHeart, 300);
