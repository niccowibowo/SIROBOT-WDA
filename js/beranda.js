(function () {
  'use strict';
  if (typeof BERITA === 'undefined') return;

  // statistik jumlah berita
  var stat = document.getElementById('stat-berita');
  if (stat) stat.textContent = BERITA.length + '+';

  var wadah = document.querySelector('.kabar');
  if (!wadah) return;
  var pills = Array.prototype.slice.call(wadah.querySelectorAll('.pill-list a'));
  var daftar = BERANDA_IDS.map(function (id) {
    return BERITA.filter(function (b) { return b.id === id; })[0];
  }).filter(Boolean);

  function el(tag, teks) { var e = document.createElement(tag); if (teks) e.textContent = teks; return e; }

  function buatKartu(b) {
    var a = el('article');
    var img = el('img'); img.src = b.gambar; img.alt = b.judul;
    var link = el('a', 'Baca Selengkapnya'); link.href = 'detail-berita.html?id=' + encodeURIComponent(b.id);
    a.appendChild(img);
    a.appendChild(el('h3', b.judul));
    a.appendChild(el('p', b.kategori + ' · ' + b.penyelenggara));
    a.appendChild(el('p', b.ringkas || b.caption));
    a.appendChild(link);
    // seluruh kartu bisa diklik (kecuali tombol yang sudah punya link sendiri)
    a.style.cursor = 'pointer';
    a.addEventListener('click', function (e) {
      if (!e.target.closest('a')) location.href = link.href;
    });
    return a;
  }

  function render(filter) {
    Array.prototype.slice.call(wadah.querySelectorAll('article')).forEach(function (a) { a.remove(); });
    daftar.filter(function (b) { return !filter || b.kategori === filter; })
      .forEach(function (b) { wadah.appendChild(buatKartu(b)); });

    var ada = wadah.querySelectorAll('article').length;
    var kosong = wadah.querySelector('.kosong');
    if (!ada && !kosong) {
      kosong = el('p', 'Belum ada berita pada kategori ini.');
      kosong.className = 'kosong';
      wadah.appendChild(kosong);
    } else if (ada && kosong) kosong.remove();
  }

  pills.forEach(function (p) {
    p.addEventListener('click', function (e) {
      e.preventDefault();
      pills.forEach(function (x) { x.classList.toggle('aktif', x === p); });
      render(p.dataset.filter || '');
    });
  });
  render('');
})();
