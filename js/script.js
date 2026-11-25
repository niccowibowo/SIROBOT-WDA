(function () {
  'use strict';
  var body = document.body;

  /* ---- tombol kembali ke atas ---- */
  var atas = document.createElement('button');
  atas.type = 'button'; atas.className = 'ke-atas'; atas.setAttribute('aria-label', 'Kembali ke atas'); atas.innerHTML = '&uarr;';
  atas.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  body.appendChild(atas);
  window.addEventListener('scroll', function () { atas.classList.toggle('tampil', window.scrollY > 600); }, { passive: true });

  /* ---- notifikasi (toast) ---- */
  function toast(judul, pesan, tipe) {
    var wrap = document.querySelector('.toast-wrap');
    if (!wrap) { wrap = document.createElement('div'); wrap.className = 'toast-wrap'; wrap.setAttribute('aria-live', 'polite'); body.appendChild(wrap); }
    var el = document.createElement('div');
    el.className = 'toast' + (tipe === 'error' ? ' error' : '');
    el.setAttribute('role', tipe === 'error' ? 'alert' : 'status');
    el.innerHTML = '<span class="toast-ikon">' + (tipe === 'error' ? '!' : '&#10003;') + '</span><div><strong></strong><span></span></div>';
    el.querySelector('strong').textContent = judul;
    el.querySelector('div > span').textContent = pesan || '';
    wrap.appendChild(el);
    setTimeout(function () { el.classList.add('keluar'); setTimeout(function () { el.remove(); }, 260); }, 4200);
  }

  /* ---- dialog konfirmasi hapus ---- */
  function konfirmasiHapus(jenis, nama) {
    return new Promise(function (selesai) {
      if (typeof HTMLDialogElement === 'undefined') { selesai(window.confirm('Hapus ' + jenis + ' "' + nama + '"?')); return; }
      var d = document.createElement('dialog');
      d.className = 'dialog-hapus';
      d.innerHTML = '<span class="dialog-ikon">!</span><h2></h2><p></p><div class="dialog-aksi"><button type="button" class="tombol-batal" data-a="batal">Batal</button><button type="button" class="tombol-hapus" data-a="ya">Ya, Hapus</button></div>';
      d.querySelector('h2').textContent = 'Hapus ' + jenis + '?';
      d.querySelector('p').textContent = 'Data "' + nama + '" akan dihapus permanen dan tidak dapat dikembalikan.';
      d.addEventListener('click', function (e) { var a = e.target.getAttribute && e.target.getAttribute('data-a'); if (a) d.close(a); });
      d.addEventListener('close', function () { var ok = d.returnValue === 'ya'; d.remove(); selesai(ok); });
      body.appendChild(d);
      d.showModal();
    });
  }

  window.UI = { toast: toast, konfirmasiHapus: konfirmasiHapus };
})();
