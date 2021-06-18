let toggled = false;

document.addEventListener("DOMContentLoaded", () => {
  let location = window.location.pathname;
  location = location.replace("/", "");
  const active = document.querySelector(".nav a[href='" + location + "']");
  active.setAttribute("class", "active");
  const sidebarActive = document.querySelector(
    ".menu a[href='" + location + "']"
  );
  sidebarActive.setAttribute("class", "active");
});

function menuTouggle(div) {
  toggled = !toggled;
  div.classList.toggle("change");
  const menu = document.querySelector(".menu");
  const backdrop = document.querySelector(".backdrop");
  if (toggled) {
    menu.style.transform = "translate(-100%, 0)";
    document.body.style.overflow = "hidden";
  } else {
    menu.style.transform = "translate(100%, 0)";
    document.body.style.overflow = "scroll";
  }
}
