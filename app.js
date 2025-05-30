let toggle = document.getElementById("toggle");
let menu = document.querySelector(".nav-links");
let close = document.getElementById("close");

toggle.addEventListener("click", () => {
  menu.classList.add("active");
  close.style.display = "flex";
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
  close.style.display = "none";
});

// progress
let calScrollValue = () => {
  let progress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calHeight);

  if (pos > 100) {
    progress.style.display = "grid";
  } else {
    progress.style.display = "none";
  }
  progress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  progress.style.background = `conic-gradient(var(--button-clr) ${scrollValue}%, var(--primary-clr) ${scrollValue}%)`
};

window.onscroll = calScrollValue;
window.onload = calScrollValue;
