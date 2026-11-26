/* berita.js : halaman BERITA
   Sorotan + semua kartu dibuat dari js/data.js, jadi selalu sinkron dengan halaman detail.
   Filter: cari + kategori + urutan (Terbaru = urutan di data.js, Terlama = kebalikannya) */
(function () {
  'use strict';
  var seksi = document.querySelector('.daftar-berita');
  if (!seksi || typeof BERITA === 'undefined') return;
  var form = seksi.querySelector('form');

  function el(tag, teks) { var e = document.createElement(tag); if (teks) e.textContent = teks; return e; }
  function potong(t, n) { return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t; }
  function href(b) { return 'detail-berita.html?id=' + encodeURIComponent(b.id); }

  /* ---------- Sorotan utama ---------- */
  var sor = document.querySelector('.sorotan');
  if (sor) {
    var s = BERITA.filter(function (b) { return b.id === (typeof SOROTAN_ID !== 'undefined' ? SOROTAN_ID : ''); })[0] || BERITA[0];
    var as = el('article');
    var gs = el('img'); gs.src = s.gambar; gs.alt = s.judul;
    var lab = el('p'); lab.appendChild(el('strong', 'Update Now'));
    var ls = el('a', 'Baca Selengkapnya'); ls.href = href(s);
    as.appendChild(gs); as.appendChild(lab); as.appendChild(el('h3', s.judul));
    as.appendChild(el('p', potong(s.ringkas || s.caption || '', 260))); as.appendChild(ls);
    sor.appendChild(as);
  }

  /* ---------- Kartu daftar berita ---------- */
  BERITA.forEach(function (b, i) {
    var a = el('article');
    a.dataset.kategori = b.kategori.toLowerCase();
    a.dataset.urut = i;
    var img = el('img'); img.src = b.gambar; img.alt = b.judul;
    var l = el('a', 'Baca Selengkapnya'); l.href = href(b);
    a.appendChild(img); a.appendChild(el('h3', b.judul));
    a.appendChild(el('p', b.kategori + ' · ' + b.penyelenggara));
    a.appendChild(el('p', potong(b.ringkas || b.caption || '', 110)));
    a.appendChild(l);
    seksi.appendChild(a);
  });
  var arts = Array.prototype.slice.call(seksi.querySelectorAll('article'));

  /* ---------- Filter ---------- */
  function terapkan() {
    var q = form.elements.cari.value.trim().toLowerCase();
    var sel = form.elements.kategori, k = sel.selectedIndex > 0 ? sel.value.toLowerCase() : '';
    var terlama = form.elements.urutan.value === 'Terlama';
    var urut = arts.slice().sort(function (a, b) { return terlama ? b.dataset.urut - a.dataset.urut : a.dataset.urut - b.dataset.urut; });
    var ada = 0;
    urut.forEach(function (a) {
      seksi.appendChild(a);
      var ok = (!k || a.dataset.kategori === k) && (!q || a.textContent.toLowerCase().indexOf(q) > -1);
      a.hidden = !ok; if (ok) ada++;
    });
    var kosong = seksi.querySelector('.kosong');
    if (!ada && !kosong) {
      kosong = document.createElement('div');
      kosong.className = 'kosong';
      kosong.innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px 20px;gap:16px;width:100%;box-sizing:border-box;">' +
          '<img src="assets/ilustrasi/No result.svg" alt="empty" style="width:180px;height:140px;object-fit:contain;background:transparent;">' +
          '<div><h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Berita tidak ditemukan</h3>' +
          '<p style="font-size:14px;margin:0;color:#777;">Coba kata kunci atau kategori lain.</p></div>' +
        '</div>';
      seksi.appendChild(kosong);
    } else if (ada && kosong) {
      kosong.remove();
    }
  }
  form.addEventListener('submit', function (e) { e.preventDefault(); terapkan(); });
  form.addEventListener('change', terapkan);
  form.addEventListener('input', function (e) { if (e.target.type === 'search') terapkan(); });
})();
