const burgerMenu = document.querySelector(".burgerMenu");
const menuItems = document.querySelectorAll(".menuItem");
const burger = document.querySelector(".burger");
const closeIcon = document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (burgerMenu.classList.contains("showMenu")) {
    burgerMenu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    burgerMenu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

burger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});

// function resizeMenuToggle() {
// if () {
//     window.addEventListener("resize", toggleMenu);
// }
// }
