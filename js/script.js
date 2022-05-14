const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const list = document.getElementById("list");

document.onclick = function (e) {
  if (e.target.id !== "menu" && e.target.id !== "list") {
    menu.classList.remove("navigation-active");
    list.classList.remove("navigation-active");
    nav.classList.remove("navigation-active");
  }
};

menu.onclick = function () {
  menu.classList.toggle("navigation-active");
  list.classList.toggle("navigation-active");
  nav.classList.toggle("navigation-active");
};
