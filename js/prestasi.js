/*   prestasi.js : halaman GALERI PRESTASI
   Kartu dibuat dari js/data.js (item bertipe 'prestasi'), jadi selalu sinkron dengan halaman detail.
   Filter tingkat (Semua/Nasional/Regional/Internal) tanpa memuat ulang halaman
  */
(function () {
  'use strict';
  var seksi = document.querySelector('.prestasi-daftar');
  if (!seksi || typeof BERITA === 'undefined') return;
  var pills = Array.prototype.slice.call(seksi.querySelectorAll('.pill-list a'));
  var halaman = seksi.querySelector('.halaman');

  function el(tag, teks) { var e = document.createElement(tag); if (teks) e.textContent = teks; return e; }

  BERITA.filter(function (b) { return b.tipe === 'prestasi'; }).forEach(function (b) {
    var a = el('article');
    a.dataset.tingkat = b.tingkat || '';
    var img = el('img'); img.src = b.gambar; img.alt = b.judul;
    var h = el('h3'), l = el('a', b.judul); l.href = 'detail-berita.html?id=' + encodeURIComponent(b.id); h.appendChild(l);
    var per = el('p', (b.peringkat || 'Prestasi') + ' · ' + b.tahun); per.className = 'peringkat';
    a.appendChild(img); a.appendChild(per); a.appendChild(h);
    a.appendChild(el('p', b.penyelenggara + ' · ' + b.tanggal));
    seksi.insertBefore(a, halaman);
  });
  var arts = Array.prototype.slice.call(seksi.querySelectorAll('article'));

  function tingkatDari(a) { return new URL(a.href, location.href).searchParams.get('tingkat') || ''; }
  function set(t) {
    var ada = 0;
    arts.forEach(function (a) { var ok = !t || a.dataset.tingkat === t; a.hidden = !ok; if (ok) ada++; });
    pills.forEach(function (a) { a.classList.toggle('aktif', tingkatDari(a) === t); });
    var kosong = seksi.querySelector('.kosong');
    if (!ada && !kosong) { kosong = document.createElement('p'); kosong.className = 'kosong'; kosong.textContent = 'Belum ada prestasi pada tingkat ini.'; seksi.insertBefore(kosong, halaman); }
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
