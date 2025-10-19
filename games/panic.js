// Panic key script for iframe pages — Ctrl + Q
document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && (e.key === "q" || e.key === "Q")) {
    // Exit fullscreen if the iframe is fullscreened
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }

    // Redirect the parent page to Google Classroom
    if (window.top) {
      window.top.location.replace("https://classroom.google.com");
    } else {
      window.location.replace("https://classroom.google.com");
    }
  }
}, true); // capture phase ensures this fires first
