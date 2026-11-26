//
// SIROBOT - Struktur Organisasi
//

document.addEventListener("DOMContentLoaded", () => {
  // ---- Animasi kartu muncul saat di-scroll ----
  const cards = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    cards.forEach((card, i) => {
      // jeda kecil antar kartu dalam satu baris agar muncul berurutan
      card.style.transitionDelay = `${(i % 3) * 80}ms`;
      observer.observe(card);
    });
  } else {
    cards.forEach((card) => card.classList.add("show"));
  }
});