const gameList = document.getElementById('gameList');
const gameFrame = document.getElementById('gameFrame');
const fullscreenBtn = document.getElementById('fullscreenBtn');

function focusIframe() {
  gameFrame.focus();
}

// Load game and focus iframe on click
gameList.addEventListener('click', function (e) {
  if (e.target && e.target.matches("li[data-game]")) {
    const gameUrl = e.target.getAttribute('data-game');
    gameFrame.src = gameUrl;

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
