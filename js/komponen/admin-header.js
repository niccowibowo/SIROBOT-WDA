(function () {
  'use strict';
  var wadah = document.querySelector('[data-komponen="admin-header"]');
  if (!wadah) return;
  var A = window.SIROBOT_AUTH || { nama: function () { return 'Pengurus'; }, email: function () { return ''; } };

  function inisial(n) { return (n.match(/\b\w/g) || ['P']).slice(0, 2).join('').toUpperCase(); }
  var nama = A.nama(), email = A.email();

  wadah.innerHTML =
    '<a href="dashboard.html" class="logo" aria-label="SIROBOT - Dashboard"></a>' +
    '<form class="admin-cari" action="#" method="get" role="search">' +
      '<label for="cari-global" class="sr-only">Cari</label>' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>' +
      '<input type="search" id="cari-global" placeholder="Cari berita, modul, atau surat...">' +
    '</form>' +
    '<div class="admin-akun">' +
      '<button type="button" class="akun-tombol" aria-haspopup="true" aria-expanded="false" aria-label="Menu akun">' +
        '<span class="avatar" data-avatar>' + inisial(nama) + '</span>' +
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>' +
      '</button>' +
      '<div class="akun-menu" hidden>' +
        '<p class="akun-nama" data-nama>' + nama + '</p>' +
        '<p class="akun-email" data-email>' + email + '</p>' +
        '<a href="profil.html">Profil</a>' +
        '<a href="pengaturan.html">Pengaturan</a>' +
        '<a href="index.html" data-logout>Keluar</a>' +
      '</div>' +
    '</div>';

  var tombol = wadah.querySelector('.akun-tombol'), menu = wadah.querySelector('.akun-menu');
  function tutup() { menu.hidden = true; tombol.setAttribute('aria-expanded', 'false'); }
  tombol.addEventListener('click', function (e) {
    e.stopPropagation();
    var buka = menu.hidden; menu.hidden = !buka; tombol.setAttribute('aria-expanded', buka ? 'true' : 'false');
  });
  document.addEventListener('click', function (e) { if (!wadah.querySelector('.admin-akun').contains(e.target)) tutup(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') tutup(); });

  // pencarian cepat: menyaring baris tabel di halaman
  var cari = wadah.querySelector('#cari-global');
  cari.form.addEventListener('submit', function (e) { e.preventDefault(); });
  cari.addEventListener('input', function () {
    var q = cari.value.trim().toLowerCase();
    Array.prototype.forEach.call(document.querySelectorAll('main tbody tr'), function (tr) {
      tr.hidden = !!q && tr.textContent.toLowerCase().indexOf(q) === -1;
    });
  });
})();
