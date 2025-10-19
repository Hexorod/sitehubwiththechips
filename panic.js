// panic.js — Global key listener
document.addEventListener("keydown", function(e) {
  if (e.key === "`") {  // The backtick key
    window.location.replace("https://classroom.google.com");
  }
});
