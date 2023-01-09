const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", () => {
    collapsible
      .querySelector(".collapsible-content")
      .classList.toggle("hidden");
    collapsible.querySelector("span").classList.toggle("fa-plus");
    collapsible.querySelector("span").classList.toggle("fa-minus");
  });
});

const anchors = document.querySelectorAll("a");

// open all external links in a new tab
anchors.forEach((anchor) => {
  if (!anchor.href.endsWith("html")) {
    anchor.setAttribute("target", "_blank");
  }
});
