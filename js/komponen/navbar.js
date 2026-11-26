(function () {
  'use strict';
  var wadah = document.querySelector('[data-komponen="navbar"]');
  if (!wadah) return;

  // Ubah menu di SINI saja, otomatis berlaku di semua halaman.
  var MENU = [
    { id: 'beranda', teks: 'Beranda', href: 'index.html' },
    { id: 'modul', teks: 'Modul', href: 'modul.html' },
    { id: 'tentang-kami', teks: 'Tentang kami', href: 'tentang-kami.html' },
    { id: 'struktur', teks: 'Struktur', href: 'struktur.html' },
    { id: 'berita', teks: 'Berita & prestasi', href: 'berita.html' }
  ];

  var aktif = wadah.getAttribute('data-aktif') || '';
  var li = MENU.map(function (m) {
    var on = m.id === aktif;
    return '<li><a href="' + m.href + '"' + (on ? ' class="active" aria-current="page"' : '') + '>' + m.teks + '</a></li>';
  }).join('');

  wadah.innerHTML =
    '<nav class="navbar" id="navbar" aria-label="Navigasi utama">' +
      '<a href="index.html" class="logo" aria-label="SIROBOT - Beranda"></a>' +
      '<button class="toggle" id="toggle" type="button" aria-label="Buka menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<ul class="menu">' + li + '</ul>' +
      '<div class="actions">' +
        '<a href="pendaftaran.html" class="btn btn-join">Join Us <span aria-hidden="true">&rarr;</span></a>' +
      '</div>' +
    '</nav>';

  // menu hamburger (layar kecil)
  var navbar = document.getElementById('navbar');
  var toggle = document.getElementById('toggle');
  toggle.addEventListener('click', function () {
    var buka = navbar.classList.toggle('show');
    toggle.classList.toggle('open', buka);
    toggle.setAttribute('aria-expanded', buka ? 'true' : 'false');
  });
})();
