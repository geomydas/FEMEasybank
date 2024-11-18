const toggleMenu = document.querySelector("[data-js='toggle-menu']");

toggleMenu.addEventListener("click", function (e) {
  toggleMenu.classList.toggle("aria-expanded");
    
  if (toggleMenu.classList.contains("aria-expanded")) {
    toggleMenu.setAttribute("aria-expanded", "true");
  } else {
    toggleMenu.setAttribute("aria-expanded", "false");
  }
});
