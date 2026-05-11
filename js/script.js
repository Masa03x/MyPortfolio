const revealElements = document.querySelectorAll(
  ".glass-card, .mini-card, .paper-combo-card, .palette-wrap, .contact-box, .hero-text, .hero-collage"
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

revealElements.forEach((el) => observer.observe(el));

const collage = document.querySelector(".hero-collage");
const pieces = document.querySelectorAll(".collage-piece, .soot, .mini-star");

if (collage) {
  collage.addEventListener("mousemove", (e) => {
    const rect = collage.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    pieces.forEach((piece, index) => {
      const strength = (index % 3 + 1) * 6;
      const moveX = x * strength;
      const moveY = y * strength;
      piece.style.transform += ` translate(${moveX}px, ${moveY}px)`;
    });
  });

  collage.addEventListener("mouseleave", () => {
    pieces.forEach((piece) => {
      piece.style.transform = "";
    });
  });
}