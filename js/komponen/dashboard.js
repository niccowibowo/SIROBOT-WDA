// 1. Tombol buka/tutup menu samping
const header = document.querySelector('header');
const tombolMenu = document.createElement('button');
tombolMenu.type = 'button';
tombolMenu.className = 'tombol-menu';
tombolMenu.textContent = '☰';
tombolMenu.setAttribute('aria-label', 'Buka atau tutup menu');
header.prepend(tombolMenu);

// Di layar kecil, menu ditutup dulu
if (window.innerWidth <= 800) {
  document.body.classList.add('sidebar-tutup');
}

tombolMenu.addEventListener('click', function () {
  document.body.classList.toggle('sidebar-tutup');
});

// 2. Tema terang / gelap
const nav = document.querySelector('nav');
const kotakTema = document.createElement('div');
kotakTema.className = 'tema';
kotakTema.innerHTML = '<span>Tema</span><button type="button"></button>';
nav.appendChild(kotakTema);

const tombolTema = kotakTema.querySelector('button');

function pasangTema(nama) {
  if (nama === 'gelap') {
    document.body.classList.add('gelap');
    tombolTema.textContent = 'Gelap';
  } else {
    document.body.classList.remove('gelap');
    tombolTema.textContent = 'Terang';
  }
  localStorage.setItem('tema', nama);
}

// Pakai tema yang tersimpan, kalau belum ada pakai terang
pasangTema(localStorage.getItem('tema') || 'terang');

tombolTema.addEventListener('click', function () {
  if (document.body.classList.contains('gelap')) {
    pasangTema('terang');
  } else {
    pasangTema('gelap');
  }
});

// 3. Pencarian
const formCari = document.querySelector('header form');
const inputCari = document.getElementById('cari');
const semuaItem = document.querySelectorAll('main li');

// Cegah halaman reload saat tekan Enter
formCari.addEventListener('submit', function (e) {
  e.preventDefault();
});

// Sembunyikan kartu/daftar yang tidak cocok dengan kata kunci
inputCari.addEventListener('input', function () {
  const kataKunci = inputCari.value.toLowerCase().trim();

  semuaItem.forEach(function (item) {
    const teks = item.textContent.toLowerCase();
    if (teks.includes(kataKunci)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

const profileTrigger = document.getElementById("profileTrigger");
const profileDropdown = document.getElementById("profileDropdown");

function toggleDropdown() {
    const isOpen = !profileDropdown.hidden;

    profileDropdown.hidden = isOpen;

    profileTrigger.classList.toggle("active", !isOpen);

    profileTrigger.setAttribute(
        "aria-expanded",
        String(!isOpen)
    );
}

// Klik tombol profil
profileTrigger.addEventListener("click", toggleDropdown);

// Klik di luar dropdown
document.addEventListener("click", (event) => {
    if (!event.target.closest(".profile-container")) {
        closeDropdown();
    }
});

// Tekan Escape
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDropdown();
    }
});

function closeDropdown() {
    profileDropdown.hidden = true;
    profileTrigger.classList.remove("active");
    profileTrigger.setAttribute("aria-expanded", "false");
}
