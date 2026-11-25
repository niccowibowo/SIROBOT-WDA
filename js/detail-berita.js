/* detail-berita.js : mengisi halaman detail berdasarkan ?id= (data di js/data.js) */
(function () {
  'use strict';
  var id = new URLSearchParams(location.search).get('id');
  var d = BERITA.filter(function (b) { return b.id === id; })[0];
  var h1 = document.getElementById('db-judul');
  if (!d) {
    h1.textContent = 'Berita tidak ditemukan';
    document.getElementById('db-meta').textContent = 'Link yang Anda buka tidak valid atau berita sudah dihapus.';
    document.querySelector('.detail-berita figure').hidden = true;
    return;
  }

  document.title = d.judul + ' | SIROBOT UKM Robotika IR64 POLIJE';
  h1.textContent = d.judul;
  document.getElementById('db-meta').textContent = d.tanggal + ' · Kategori: ' + d.kategori;
  var img = document.getElementById('db-gambar'); img.src = d.gambar; img.alt = d.judul;
  document.getElementById('db-caption').textContent = d.caption;
  var isi = document.getElementById('db-isi');
  d.isi.forEach(function (t) { var p = document.createElement('p'); p.textContent = t; isi.appendChild(p); });

  // breadcrumb & tombol kembali menyesuaikan tipe (prestasi / kegiatan)
  var prestasi = d.tipe === 'prestasi';
  var krumb = document.getElementById('db-krumb');
  krumb.textContent = prestasi ? 'Prestasi' : 'Kegiatan';
  krumb.href = prestasi ? 'prestasi.html' : 'berita.html';
  var kembali = document.getElementById('db-kembali');
  kembali.textContent = prestasi ? '\u2190 Kembali ke Prestasi' : '\u2190 Kembali ke Kegiatan';
  kembali.href = krumb.href;
})();
