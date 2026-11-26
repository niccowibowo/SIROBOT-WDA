/*   modul.js : halaman MODUL
   Kartu + pilihan Kategori & Tahun dibuat dari js/data.js (MODUL), jadi selalu sinkron dengan halaman detail.
   Filter: Waktu (Semua/Sekarang/Dahulu) + Kategori riset + Tahun + Cari
   "Sekarang" = modul tahun lalu & tahun ini; "Dahulu" = lebih lama (dihitung otomatis dari tahun modul).
   Tahun diambil dari field 'tahun'; jika kosong, diambil dari 4 digit terakhir field 'tanggal'.
  */
(function () {
  'use strict';
  var form = document.querySelector('.modul-filter');
  var seksi = document.querySelector('.modul-daftar');
  if (!form || !seksi || typeof MODUL === 'undefined') return;

  function el(tag, teks, kelas) {
    var e = document.createElement(tag);
    if (teks) e.textContent = teks;
    if (kelas) e.className = kelas;
    return e;
  }

  /* ---------- Tahun: satu sumber kebenaran ---------- */
  function tahunDari(m) {
    var t = parseInt(m.tahun, 10);
    if (!isNaN(t)) return t;
    var cocok = /(\d{4})\s*$/.exec(String(m.tanggal || ''));
    return cocok ? parseInt(cocok[1], 10) : NaN;
  }
  var batas = new Date().getFullYear() - 1;
  function waktuDari(m) {
    var t = tahunDari(m);
    return !isNaN(t) && t >= batas ? 'sekarang' : 'dahulu';
  }

  /* ---------- Pilihan filter dari data ---------- */
  function isiPilihan(select, nilai) {
    nilai.forEach(function (v) {
      var o = el('option', String(v));
      o.value = String(v);
      select.appendChild(o);
    });
  }
  function unik(arr) {
    return arr.filter(function (v, i) { return v !== '' && v != null && !(typeof v === 'number' && isNaN(v)) && arr.indexOf(v) === i; });
  }
  isiPilihan(form.elements.kategori, unik(MODUL.map(function (m) { return m.kategori; })).sort());
  isiPilihan(form.elements.tahun, unik(MODUL.map(tahunDari)).sort(function (a, b) { return b - a; }));

  /* ---------- Kartu modul ---------- */
  MODUL.forEach(function (m) {
    var a = el('article');
    a.dataset.kategori = m.kategori || '';
    a.dataset.tahun = String(tahunDari(m) || '');
    a.dataset.waktu = waktuDari(m);
    /* teks yang boleh dicari: tidak termasuk tombol "Pelajari sekarang" */
    a.dataset.cari = [m.judul, m.topik, m.deskripsi, m.kategori, m.level].join(' ').toLowerCase();

    var img = el('img');
    img.src = m.gambar;
    img.alt = 'Sampul ' + m.judul;
    img.loading = 'lazy';

    var status = el('span', m.level, 'status');
    var judul = el('h3', m.judul);
    var kode = el('p', m.topik, 'kode');
    var desk = el('p', m.deskripsi);
    var link = el('a', 'Pelajari sekarang');
    link.href = 'detail-modul.html?id=' + encodeURIComponent(m.id);

    a.appendChild(img);
    a.appendChild(status);
    a.appendChild(judul);
    a.appendChild(kode);
    a.appendChild(desk);
    a.appendChild(link);
    seksi.appendChild(a);
  });

  var kartu = Array.prototype.slice.call(seksi.querySelectorAll('article'));
  var pills = Array.prototype.slice.call(form.querySelectorAll('.pill-list a'));
  var waktu = 'semua';
  var wadah = seksi;

  function terapkan() {
    var k = form.elements.kategori.value;
    var t = form.elements.tahun.value;
    var q = form.elements.cari.value.trim().toLowerCase();
    var ada = 0;
    kartu.forEach(function (c) {
      var ok = (waktu === 'semua' || c.dataset.waktu === waktu) &&
               (!k || c.dataset.kategori === k) &&
               (!t || c.dataset.tahun === t) &&
               (!q || c.dataset.cari.indexOf(q) > -1);
      c.hidden = !ok;
      if (ok) ada++;
    });
    var kosong = wadah.querySelector('.kosong');

    if (!ada && !kosong) {
      kosong = document.createElement('div');
      kosong.className = 'kosong';
      kosong.style.gridColumn = '1 / -1';
      kosong.innerHTML =
        '<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;width:100%;box-sizing:border-box;padding:40px 20px;gap:16px;">' +
          '<img src="assets/ilustrasi/No result.svg" alt="" style="width:180px;height:140px;object-fit:contain;display:block;background:transparent;">' +
          '<div><h3 style="font-size:18px;font-weight:700;margin:0 0 8px;">Modul tidak ditemukan</h3>' +
          '<p style="font-size:14px;color:#777;margin:0;">Tidak ada modul yang cocok dengan filter. Coba ubah kata kunci atau filter.</p></div>' +
        '</div>';
      wadah.appendChild(kosong);
    } else if (ada && kosong) {
      kosong.remove();
    }
    perbaruiUrl();
  }

  /* simpan filter di URL supaya bisa dibagikan (tanpa reload) */
  function perbaruiUrl() {
    if (!window.history || !history.replaceState) return;
    var p = new URLSearchParams();
    if (waktu !== 'semua') p.set('waktu', waktu);
    if (form.elements.kategori.value) p.set('kategori', form.elements.kategori.value);
    if (form.elements.tahun.value) p.set('tahun', form.elements.tahun.value);
    var q = form.elements.cari.value.trim();
    if (q) p.set('cari', q);
    var s = p.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
  }

  function setWaktu(w) {
    waktu = (w === 'sekarang' || w === 'dahulu') ? w : 'semua';
    pills.forEach(function (a) { a.classList.toggle('aktif', a.dataset.waktu === waktu); });
    terapkan();
  }

  pills.forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); setWaktu(a.dataset.waktu); });
  });
  form.addEventListener('submit', function (e) { e.preventDefault(); terapkan(); });
  form.addEventListener('change', terapkan);
  form.addEventListener('input', function (e) { if (e.target.type === 'search') terapkan(); });

  /* isi filter dari URL (nilai yang tidak ada di daftar otomatis jadi "semua") */
  var p = new URLSearchParams(location.search);
  ['kategori', 'tahun', 'cari'].forEach(function (n) {
    if (p.get(n) && form.elements[n]) form.elements[n].value = p.get(n);
  });
  setWaktu(p.get('waktu') || 'semua');
})();
