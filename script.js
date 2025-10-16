const gameList = document.getElementById('gameList');
const gameFrame = document.getElementById('gameFrame');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Load game into iframe
gameList.addEventListener('click', function (e) {
  if (e.target && e.target.matches("li[data-game]")) {
    const gameUrl = e.target.getAttribute('data-game');
    gameFrame.src = gameUrl;

    // Wait for iframe to load, then focus it
    gameFrame.addEventListener('load', () => {
      gameFrame.focus();
    }, { once: true });
  }
});

// Toggle fullscreen
fullscreenBtn.addEventListener('click', () => {
  if (gameFrame.requestFullscreen) {
    gameFrame.requestFullscreen();
  } else if (gameFrame.webkitRequestFullscreen) {
    gameFrame.webkitRequestFullscreen();
  } else if (gameFrame.msRequestFullscreen) {
    gameFrame.msRequestFullscreen();
  }

  // Focus iframe after fullscreen
  gameFrame.focus();
});
