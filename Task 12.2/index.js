let doctitle = document.title;
window.addEventListener("blur", () => {
  document.title = "👋 Hey! come back...";
});
window.addEventListener("focus", () => {
  document.title = doctitle;
});