const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const track = document.querySelector(".carypto-track");
const slides = document.querySelectorAll(".carypto-card");

if (track && slides.length > 0) {
  let index = 0;

  setInterval(() => {
    const slideStyle = getComputedStyle(track);
    const gap = parseInt(slideStyle.gap) || 0;
    const slideWidth = slides[0].offsetWidth + gap;

    index++;

    track.style.transition = "transform 0.7s ease";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    if (index >= slides.length - 6) {
      setTimeout(() => {
        track.style.transition = "none";
        index = 0;
        track.style.transform = "translateX(0)";
      }, 700);
    }
  }, 3000);
}

const slideUpItems = document.querySelectorAll(".slide-up");

const slideUpObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.3
});

slideUpItems.forEach((item) => {
  slideUpObserver.observe(item);
});