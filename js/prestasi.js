/* =====================================================
   prestasi.js : halaman GALERI PRESTASI
   Filter tingkat (Semua/Nasional/Regional/Internal) tanpa memuat ulang halaman
   ===================================================== */
(function () {
  'use strict';
  var seksi = document.querySelector('.prestasi-daftar');
  if (!seksi) return;
  var arts = Array.prototype.slice.call(seksi.querySelectorAll('article'));
  var pills = Array.prototype.slice.call(seksi.querySelectorAll('.pill-list a'));

  function tingkatDari(a) { return new URL(a.href, location.href).searchParams.get('tingkat') || ''; }
  function set(t) {
    var ada = 0;
    arts.forEach(function (a) { var ok = !t || a.dataset.tingkat === t; a.hidden = !ok; if (ok) ada++; });
    pills.forEach(function (a) { a.classList.toggle('aktif', tingkatDari(a) === t); });
    var kosong = seksi.querySelector('.kosong');
    if (!ada && !kosong) { kosong = document.createElement('p'); kosong.className = 'kosong'; kosong.textContent = 'Belum ada prestasi pada tingkat ini.'; seksi.insertBefore(kosong, seksi.querySelector('.halaman')); }
    else if (ada && kosong) kosong.remove();
  }
  pills.forEach(function (a) {
    a.addEventListener('click', function (e) {
      e.preventDefault(); var t = tingkatDari(a); set(t);
      if (history.pushState) history.pushState(null, '', t ? '?tingkat=' + t : location.pathname);
    });
  });
  set(new URLSearchParams(location.search).get('tingkat') || '');
})();
