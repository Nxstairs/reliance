const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const tracks = document.querySelectorAll(".carypto-track");

tracks.forEach((track) => {
  const slides = track.querySelectorAll(".carypto-card");

  if (slides.length > 0) {
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
});

const animatedItems = document.querySelectorAll(
  ".slide-up, .slide-left, .slide-right"
);

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.3
});

animatedItems.forEach((item) => {
  observer.observe(item);
});