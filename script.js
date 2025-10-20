const gameList = document.getElementById('gameList');
const gameFrame = document.getElementById('gameFrame');
const fullscreenBtn = document.getElementById('fullscreenBtn');

function focusIframe() {
  gameFrame.focus();
}

// Load homepage on page load and highlight it
const homepageItem = gameList.querySelector('li[data-game="games/homepage.html"]');
if (homepageItem) {
  gameFrame.src = homepageItem.dataset.game;

  // Highlight the homepage in the sidebar
  gameList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
  homepageItem.classList.add('active');
}

// Load game and focus iframe on click
gameList.addEventListener('click', function (e) {
  if (e.target && e.target.matches("li[data-game]")) {
    const gameUrl = e.target.getAttribute('data-game');
    gameFrame.src = gameUrl;

    // Highlight clicked item
    gameList.querySelectorAll('li').forEach(li => li.classList.remove('active'));
    e.target.classList.add('active');

    // Focus iframe immediately on user click (gesture)
    focusIframe();

    // Focus iframe again after iframe loads content
    gameFrame.addEventListener('load', () => {
      focusIframe();
    }, { once: true });
  }
});

// Focus iframe when clicking inside the iframe
gameFrame.addEventListener('click', () => {
  focusIframe();
});

// Toggle fullscreen and focus iframe
fullscreenBtn.addEventListener('click', () => {
  if (gameFrame.requestFullscreen) {
    gameFrame.requestFullscreen();
  } else if (gameFrame.webkitRequestFullscreen) {
    gameFrame.webkitRequestFullscreen();
  } else if (gameFrame.msRequestFullscreen) {
    gameFrame.msRequestFullscreen();
  }
  
  focusIframe();
});
