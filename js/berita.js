/* berita.js : halaman BERITA*/
(function () {
  'use strict';
  var seksi = document.querySelector('.daftar-berita');
  if (!seksi) return;
  var form = seksi.querySelector('form');
  var arts = Array.prototype.slice.call(seksi.querySelectorAll('article'));

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

    kosong.innerHTML = `
      <div style="
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        padding: 40px 20px;
        gap: 16px;
        width: 100%;
        box-sizing: border-box;
      ">
        <img
          src="assets/ilustrasi/No result.svg"
          alt="empty"
          style="
            width: 180px;
            height: 140px;
            object-fit: contain;
            background: transparent;
          "
        >

        <div>
          <h3 style="
            font-size: 18px;
            font-weight: 700;
            margin: 0 0 8px;
          ">
            Berita tidak ditemukan
          </h3>

          <p style="
            font-size: 14px;
            margin: 0;
            color: #777;
          ">
            Coba kata kunci atau kategori lain.
          </p>
        </div>
      </div>
    `;

  seksi.appendChild(kosong);

} else if (ada && kosong) {
  kosong.remove();
}
  }
  form.addEventListener('submit', function (e) { e.preventDefault(); terapkan(); });
  form.addEventListener('change', terapkan);
  form.addEventListener('input', function (e) { if (e.target.type === 'search') terapkan(); });
})();
