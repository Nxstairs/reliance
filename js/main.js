const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const track = document.querySelector(".carypto-track");
const slides = document.querySelectorAll(".carypto-card");

let index = 0;

setInterval(() => {

  index++;

  if(index >= slides.length){
    index = 0;
  }

  track.style.transform =
    `translateX(-${index * 100}%)`;

}, 3000);