/* beranda.js : bagian "Kabar dari IR64" + statistik berita di Beranda
   Sumber data SAMA dengan halaman Berita & Prestasi: js/data.js (BERITA).
   Kabar menampilkan campuran berita + prestasi + kegiatan + organisasi (BATAS item pertama sesuai urutan data.js).
   Jika Anda sudah punya beranda.js lama, gabungkan isi file ini ke dalamnya. */
(function () {
  'use strict';
  if (typeof BERITA === 'undefined') return;
  var BATAS = 6;   // jumlah kartu yang tampil di Beranda

  var stat = document.getElementById('stat-berita');
  if (stat) stat.textContent = BERITA.length + '+';

  var wadah = document.querySelector('.kabar');
  if (!wadah) return;
  var pills = Array.prototype.slice.call(wadah.querySelectorAll('.pill-list a'));

  function el(tag, teks) { var e = document.createElement(tag); if (teks) e.textContent = teks; return e; }
  function potong(t, n) { return t.length > n ? t.slice(0, n).replace(/\s+\S*$/, '') + '…' : t; }

  function buatKartu(b) {
    var a = el('article');
    var img = el('img'); img.src = b.gambar; img.alt = b.judul;
    var link = el('a', 'Baca Selengkapnya'); link.href = 'detail-berita.html?id=' + encodeURIComponent(b.id);
    a.appendChild(img);
    a.appendChild(el('h3', b.judul));
    a.appendChild(el('p', b.kategori + ' · ' + b.penyelenggara));
    a.appendChild(el('p', potong(b.ringkas || b.caption || '', 110)));
    a.appendChild(link);
    a.style.cursor = 'pointer';
    a.addEventListener('click', function (e) {
      if (!e.target.closest('a')) location.href = link.href;
    });
    return a;
  }

  function render(filter) {
    Array.prototype.slice.call(wadah.querySelectorAll('article')).forEach(function (a) { a.remove(); });
    BERITA.filter(function (b) { return !filter || b.kategori === filter; })
      .slice(0, BATAS)
      .forEach(function (b) { wadah.appendChild(buatKartu(b)); });

    var ada = wadah.querySelectorAll('article').length;
    var kosong = wadah.querySelector('.kosong');

if (!ada && !kosong) {
  kosong = document.createElement('div');
  kosong.className = 'kosong';

  kosong.innerHTML = `
    <div style="
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      padding: 40px 20px;
      gap: 16px;
    ">
      <img
        src="assets/ilustrasi/No result.svg"
        alt=""
        style="
          width: 180px;
          height: 140px;
          object-fit: contain;
          display: block;
          background: transparent;
        "
      >

      <div>
        <h3 style="
          font-size: 18px;
          font-weight: 700;
          margin: 0 0 8px;
        ">
          Belum ada berita pada kategori ini.
        </h3>
      </div>
    </div>
  `;

  wadah.appendChild(kosong);

} else if (ada && kosong) 
  kosong.remove();
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
