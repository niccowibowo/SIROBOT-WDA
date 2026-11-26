
/* =========================================
   CUSTOM CURSOR ENGINE
   Dipanggil sekali untuk seluruh halaman
   ========================================= */

(function () {
  'use strict';

  // Jangan aktifkan pada touchscreen
  if (!window.matchMedia('(pointer: fine)').matches) {
    return;
  }

  // Hindari duplikasi
  if (document.querySelector('.custom-cursor')) {
    return;
  }

  // Buat elemen cursor
  const dot = document.createElement('div');
  const outline = document.createElement('div');

  dot.className = 'custom-cursor';
  outline.className = 'custom-cursor-outline';

  document.body.appendChild(outline);
  document.body.appendChild(dot);

  let mouseX = -100;
  let mouseY = -100;

  let outlineX = -100;
  let outlineY = -100;

  // Posisi mouse
  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';

    dot.classList.remove('hidden');
    outline.classList.remove('hidden');
  });

  // Animasi smooth
  function animateCursor() {
    outlineX += (mouseX - outlineX) * 0.15;
    outlineY += (mouseY - outlineY) * 0.15;

    outline.style.left = outlineX + 'px';
    outline.style.top = outlineY + 'px';

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  // Hover interaktif
  document.addEventListener('mouseover', function (e) {
    const target = e.target.closest(
      'a, button, input, select, textarea, [data-cursor="hover"]'
    );

    outline.classList.toggle('hover', !!target);
  });

  // Hover teks
  document.addEventListener('mouseover', function (e) {
    const target = e.target.closest('[data-cursor="text"]');

    outline.classList.toggle('text-hover', !!target);
  });

  // Animasi klik
  document.addEventListener('mousedown', function () {
    outline.classList.add('click');
  });

  document.addEventListener('mouseup', function () {
    outline.classList.remove('click');
  });

  // Sembunyikan ketika meninggalkan halaman
  document.addEventListener('mouseleave', function () {
    dot.classList.add('hidden');
    outline.classList.add('hidden');
  });

  document.addEventListener('mouseenter', function () {
    dot.classList.remove('hidden');
    outline.classList.remove('hidden');
  });

})();
