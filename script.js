const gameList = document.getElementById('gameList');
const gameFrame = document.getElementById('gameFrame');
const fullscreenBtn = document.getElementById('fullscreenBtn');
// At the top of script.js, after defining gameFrame
const gameFrame = document.getElementById('gameFrame');

// Load homepage on startup
gameFrame.src = "games/homepage.html";

// Optional: keep your existing click handlers for the game list
const gameList = document.getElementById('gameList');
gameList.querySelectorAll('li').forEach(item => {
  item.addEventListener('click', () => {
    const game = item.dataset.game;
    gameFrame.src = game;
  });
});


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
