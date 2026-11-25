/* detail-modul.js : mengisi halaman detail modul berdasarkan ?id= (data di js/data.js) */
(function () {
  'use strict';
  var id = new URLSearchParams(location.search).get('id');
  var d = MODUL.filter(function (m) { return m.id === id; })[0];
  var h1 = document.getElementById('dm-judul');
  if (!d) {
    h1.textContent = 'Modul tidak ditemukan';
    document.getElementById('dm-deskripsi').textContent = 'Link yang Anda buka tidak valid. Silakan pilih modul dari daftar.';
    document.querySelector('.detail-modul .meta').hidden = true;
    document.querySelector('.detail-modul .aksi').hidden = true;
    document.querySelector('.pratinjau').hidden = true;
    return;
  }

  document.title = d.judul + ' | SIROBOT UKM Robotika IR64 POLIJE';
  h1.textContent = d.judul;
  document.getElementById('dm-level').textContent = d.level;
  document.getElementById('dm-deskripsi').textContent = d.deskripsi;
  document.getElementById('dm-ukuran').textContent = d.ukuran;
  document.getElementById('dm-tanggal').textContent = d.tanggal;
  var img = document.getElementById('dm-gambar'); img.src = d.gambar; img.alt = d.judul;
  document.getElementById('dm-unduh').href = d.pdf;
  document.getElementById('dm-lihat').href = d.pdf;
  document.getElementById('dm-buka').href = d.pdf;
  document.getElementById('dm-objek').data = d.pdf;
})();
