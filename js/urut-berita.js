(function () {
  'use strict';
  if (typeof BERITA === 'undefined') return;
  var BULAN = { januari: 0, februari: 1, maret: 2, april: 3, mei: 4, juni: 5, juli: 6, agustus: 7, september: 8, oktober: 9, november: 10, desember: 11 };

  window.tglBerita = function (b) {
    var t = String(b.tanggal || '').trim(), m;
    if ((m = t.match(/^(\d{4})-(\d{2})-(\d{2})/))) return new Date(+m[1], +m[2] - 1, +m[3]);
    if ((m = t.match(/(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/)) && BULAN[m[2].toLowerCase()] !== undefined) return new Date(+m[3], BULAN[m[2].toLowerCase()], +m[1]);
    return new Date(parseInt(b.tahun, 10) || 1970, 0, 1);
  };
  /* "sekarang" = tahun lalu & tahun ini, "dahulu" = lebih lama (sama seperti halaman Modul) */
  window.waktuBerita = function (b) {
    return window.tglBerita(b).getFullYear() >= new Date().getFullYear() - 1 ? 'sekarang' : 'dahulu';
  };

  BERITA.map(function (b, i) { return { b: b, i: i }; })
    .sort(function (x, y) { return (window.tglBerita(y.b) - window.tglBerita(x.b)) || (x.i - y.i); })
    .forEach(function (x, i) { BERITA[i] = x.b; });
})();