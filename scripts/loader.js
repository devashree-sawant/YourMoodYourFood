// scripts/loader.js

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  setTimeout(() => {
    loader.style.display = "none";
    main.style.display = "flex";
  }, 3000); // 3 seconds loader
});
