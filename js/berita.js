(function () {
  'use strict';
  var seksi = document.querySelector('.daftar-berita');
  if (!seksi || typeof BERITA === 'undefined') return;
  var form = seksi.querySelector('form');
  if (typeof tglBerita === 'undefined') {   // cadangan bila urut-berita.js belum dipasang
    window.tglBerita = function (b) { return new Date(parseInt(b.tahun, 10) || 1970, 0, 1); };
    window.waktuBerita = function (b) { return parseInt(b.tahun, 10) >= new Date().getFullYear() - 1 ? 'sekarang' : 'dahulu'; };
  }

  function el(tag, teks) { var e = document.createElement(tag); if (teks) e.textContent = teks; return e; }
  function potong(t, n) { return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t; }
  function href(b) { return 'detail-berita.html?id=' + encodeURIComponent(b.id); }
  function unik(arr) { return arr.filter(function (v, i) { return v && arr.indexOf(v) === i; }); }

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

  /* ---------- Pilihan Kategori & Tahun dari data ---------- */
  function isiPilihan(select, nilai) {
    nilai.forEach(function (v) { var o = el('option', v); o.value = v; select.appendChild(o); });
  }
  isiPilihan(form.elements.kategori, unik(BERITA.map(function (b) { return b.kategori; })).sort());
  isiPilihan(form.elements.tahun, unik(BERITA.map(function (b) { return String(tglBerita(b).getFullYear()); })).sort().reverse());

  /* ---------- Kartu daftar berita (sudah urut terbaru) ---------- */
  BERITA.forEach(function (b) {
    var a = el('article');
    a.dataset.kategori = b.kategori;
    a.dataset.tahun = String(tglBerita(b).getFullYear());
    a.dataset.waktu = waktuBerita(b);
    var img = el('img'); img.src = b.gambar; img.alt = b.judul;
    var l = el('a', 'Baca Selengkapnya'); l.href = href(b);
    a.appendChild(img); a.appendChild(el('h3', b.judul));
    a.appendChild(el('p', b.kategori + ' · ' + b.penyelenggara));
    a.appendChild(el('p', potong(b.ringkas || b.caption || '', 110)));
    a.appendChild(l);
    seksi.appendChild(a);
  });
  var arts = Array.prototype.slice.call(seksi.querySelectorAll('article'));
  var pills = Array.prototype.slice.call(form.querySelectorAll('.pill-list a'));
  var waktu = 'semua';

  /* ---------- Filter ---------- */
  function terapkan() {
    var k = form.elements.kategori.value, t = form.elements.tahun.value, q = form.elements.cari.value.trim().toLowerCase(), ada = 0;
    arts.forEach(function (a) {
      var ok = (waktu === 'semua' || a.dataset.waktu === waktu) && (!k || a.dataset.kategori === k) && (!t || a.dataset.tahun === t) &&
        (!q || a.textContent.toLowerCase().indexOf(q) > -1);
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
  function setWaktu(w) { waktu = w; pills.forEach(function (a) { a.classList.toggle('aktif', a.dataset.waktu === w); }); terapkan(); }

  pills.forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); setWaktu(a.dataset.waktu); }); });
  form.addEventListener('submit', function (e) { e.preventDefault(); terapkan(); });
  form.addEventListener('change', terapkan);
  form.addEventListener('input', function (e) { if (e.target.type === 'search') terapkan(); });

  var p = new URLSearchParams(location.search);
  ['kategori', 'tahun', 'cari'].forEach(function (n) { if (p.get(n) && form.elements[n]) form.elements[n].value = p.get(n); });
  setWaktu(p.get('waktu') || 'semua');
})();
