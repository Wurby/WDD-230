const menuButton = document.querySelector(".fa-hamburger");
const menu = document.querySelector(".menu");
menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menu.classList.toggle("closed");
});

setTimeout(() => {
  menu.style.visibility = "visible";
}, 350);

const links = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

const allClickables = [...links, ...buttons];

allClickables.forEach((clickable) => {
  clickable.addEventListener("click", (e) => {
    e.target.classList.add("buttonPop");
    setTimeout(() => {
      e.target.classList.remove("buttonPop");
    }, 350);
  });
});

window.addEventListener("click", (e) => {
  if (e.target !== menuButton && e.target !== menu) {
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
      menu.classList.add("closed");
    }
  }
});
