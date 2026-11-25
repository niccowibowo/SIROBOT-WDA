/* Gaya: css/footer.css
  */
(function () {
  'use strict';
  var wadah = document.querySelector('[data-komponen="footer"]');
  if (!wadah) return;

  // ISI kontak di SINI saja, otomatis berlaku di semua halaman.
  var KONTAK = {
    whatsappLink: 'https://wa.me/62132648562',   // format 62..., tanpa 0 / +
    whatsappTeks: '085732444518',
    emailLink: 'ukm.robotika@polije.ac.id ',
    emailTeks: 'ukm.robotika@polije.ac.id ',
    instagram: 'https://www.instagram.com/ir64.polije?igsh=MXVicXVndjIxNWNucg%3D%3D',
  };

  wadah.innerHTML =
    '<h2>Apakah ada pertanyaan?</h2>' +
    '<p>Jika anda bingung segera hubungi kontak kami</p>' +
    '<p><a href="pendaftaran.html#kontak">Hubungi kami</a></p>' +
    '<nav aria-label="Navigasi footer"><ul>' +
      '<li><a href="modul.html">Modul</a></li>' +
      '<li><a href="prestasi.html">Prestasi</a></li>' +
      '<li><a href="tentang-kami.html">Tentang kami</a></li>' +
      '<li><a href="pendaftaran.html#kontak">Kontak kami</a></li>' +
    '</ul></nav>' +
    '<address>' +
      '<p><strong>WhatsApp</strong><br><a href="' + KONTAK.whatsappLink + '">' + KONTAK.whatsappTeks + '</a></p>' +
      '<p><strong>Email</strong><br><a href="' + KONTAK.emailLink + '">' + KONTAK.emailTeks + '</a></p>' +
    '</address>' +
    '<p><img src="assets/images/Logo Footer.png" alt="Logo SIROBOT" class="footer-logo"> – Akun media sosial kami:<br>' +
      '<a href="' + KONTAK.instagram + '">Instagram</a>  ' +
    '<p><small>&copy; 2026 UKM Robotika IR64 POLIJE</small></p>';
})();

