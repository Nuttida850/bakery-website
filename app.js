let toggle = document.getElementById("toggle");
let menu = document.querySelector(".nav-links");
let close = document.getElementById("close");
toggle.addEventListener("click", () => {
  menu.classList.add("active");
  close.style.display = "flex" ;
});
close.addEventListener("click", () => {
  menu.classList.remove("active");
  close.style.display = "none";
});
