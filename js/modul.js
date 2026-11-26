/* =====================================================
   modul.js : halaman MODUL
   Filter: Waktu (Semua/Sekarang/Dahulu) + Kategori riset + Tahun + Cari
   (data tiap kartu ada di atribut data-waktu, data-kategori, data-tahun)
   ===================================================== */
(function () {
  'use strict';
  var form = document.querySelector('.modul-filter');
  if (!form) return;
  var kartu = Array.prototype.slice.call(document.querySelectorAll('.modul-daftar article'));
  var pills = Array.prototype.slice.call(form.querySelectorAll('.pill-list a'));
  var waktu = 'semua';
  var wadah = kartu[0] ? kartu[0].parentNode : form.parentNode;

  function terapkan() {
    var k = form.elements.kategori.value, t = form.elements.tahun.value, q = form.elements.cari.value.trim().toLowerCase(), ada = 0;
    kartu.forEach(function (c) {
      var ok = (waktu === 'semua' || c.dataset.waktu === waktu) && (!k || c.dataset.kategori === k) && (!t || c.dataset.tahun === t) &&
        (!q || c.textContent.toLowerCase().indexOf(q) > -1);
      c.hidden = !ok; if (ok) ada++;
    });
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
          Modul tidak ditemukan
        </h3>

        <p style="
          font-size: 14px;
          color: #777;
          margin: 0;
        ">
          Tidak ada modul yang cocok dengan filter.
          Coba ubah kata kunci atau filter.
        </p>
      </div>
    </div>
  `;

  wadah.appendChild(kosong);

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
