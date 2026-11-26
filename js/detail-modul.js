/* detail-modul.js ini buat mengisi halaman detail modul berdasarkan ?id= (data di js/data.js)
   Ukuran file dideteksi OTOMATIS dari file PDF-nya (perlu dibuka lewat server/hosting, bukan file://). */
(function () {
  'use strict';
  var id = new URLSearchParams(location.search).get('id');
  var d = MODUL.filter(function (m) { return m.id === id; })[0];
  var h1 = document.getElementById('dm-judul');
  if (!d) {
    document.title = 'Modul tidak ditemukan | SIROBOT UKM Robotika IR64 POLIJE';
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
  document.getElementById('dm-tanggal').textContent = d.tanggal;
  var img = document.getElementById('dm-gambar'); img.src = d.gambar; img.alt = d.judul;
  document.getElementById('dm-unduh').href = d.pdf;
  document.getElementById('dm-lihat').href = d.pdf;
  document.getElementById('dm-buka').href = d.pdf;
  document.getElementById('dm-objek').data = d.pdf;

  /* ---------- Deteksi ukuran file otomatis ---------- */
  var uk = document.getElementById('dm-ukuran');
  function format(b) {
    if (b < 1024) return b + ' B';
    if (b < 1048576) return (b / 1024).toFixed(1).replace('.', ',') + ' KB';
    return (b / 1048576).toFixed(1).replace('.', ',') + ' MB';
  }
  function cadangan() { uk.textContent = d.ukuran || 'Tidak diketahui'; }
  function bukanPdf(r) {
    var tipe = (r.headers.get('content-type') || '').toLowerCase();
    return tipe && tipe.indexOf('pdf') === -1 && tipe.indexOf('octet-stream') === -1;
  }
  uk.textContent = 'Menghitung…';
  if (!window.fetch) { cadangan(); return; }
  fetch(d.pdf, { method: 'HEAD' }).then(function (r) {
    if (r.status === 404 || bukanPdf(r)) { uk.textContent = 'File belum tersedia'; return; }
    if (!r.ok) throw new Error('gagal');
    var n = parseInt(r.headers.get('content-length'), 10);
    if (n > 0) { uk.textContent = format(n); return; }
    // server tidak memberi Content-Length: hitung dari isi file
    return fetch(d.pdf).then(function (g) { return g.blob(); }).then(function (b) { uk.textContent = format(b.size); });
  }).catch(cadangan);
})();
