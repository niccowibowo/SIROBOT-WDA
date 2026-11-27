/* data.js : SATU-SATUNYA tempat isi berita, prestasi, dan modul.
   Judul/foto yang diubah di sini otomatis berubah di Beranda, halaman Berita, Galeri Prestasi, dan Detail.
   Prestasi (tipe 'prestasi') wajib punya 'tingkat': nasional | regional | internal.
   Modul wajib punya: kategori & tahun (angka) agar filter di halaman Modul berfungsi.
   Tambah item baru di sini; 'id' harus unik dan sama dengan ?id= di link kartu. */
var BERITA = [
  {
    "id": "juara-olivia-xi",
    "tipe": "prestasi",
    "kategori": "Prestasi",
    "judul": "Juara nasional KRTMI 2019",
    "penyelenggara": "Universitas Dian Nuswantoro",
    "peringkat": "Juara 1",
    "tahun": "2019",
    "tanggal": "27 Juni 2019",
    "gambar": "assets/images/ROBOT TANOKER.png",
    "caption": "Tim UKM Robotika di Universitas Dian Nuswantoro, Semarang, Jawa Tengah",
    "isi": [
      "ANTARA - Robot Tanoker IR_64 karya mahasiswa Politeknik Negeri Jember (Polije) berhasil menyabet juara 1 di Kontes Robot Tematik Indonesia (KRTMI) 2019 yang bertempat di Universitas Dian Nuswantoro, Semarang, Jawa Tengah, pada 22-23 Juni 2019.  Dalam perlombaan tersebut robot milik Polije turun di kontes bertema robot pertanian padi.(Hamka Agung/Sandi Arizona/Sizuka)  ",
    ],
    "ringkas": "Kategori Programmable Logic Controller.",
    "tingkat": "nasional"
  },
  {
    "id": "penyambutan-calon",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Penyambutan Calon anggota baru",
    "penyelenggara": "Divisi Edukasi",
    "peringkat": "",
    "tahun": "2023",
    "tanggal": "27 Agustus 2023",
    "gambar": "assets/images/Sambutan Mahasiswa Baru di Robotika.jpeg",
    "caption": "Penyambutan calon anggota baru IR 64 Robotika",
    "ringkas": "Penyambutan calon anggota baru pada tanggal 27 Agustus 2023. Kegiatan ini dilakukan agar calon anggota baru mengenal lebih dekat lingkungan organisasi, anggota, serta aktivitas yang dilakukan di IR 64 Robotika.",
    "isi": [
      "Penyambutan calon anggota baru pada tanggal 27 Agustus 2023. Kegiatan ini dilakukan agar calon anggota baru mengenal lebih dekat lingkungan organisasi, anggota, serta aktivitas yang dilakukan di IR 64 Robotika.",

    ]
  },
  {
    "id": "workshop-arduino",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Rapat persiapan",
    "penyelenggara": "Divisi Edukasi",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "3 Maret 2026",
    "gambar": "assets/images/berita2.jpg",
    "caption": "Peserta workshop Arduino",
    "isi": [
      "Pada tanggal 30 September 2025 UKM Robotika Politeknik Negeri Jember melaksanakan rangkaian kegiatan mulai dari rapat persiapan."
    ]
  },
  {
    "id": "latihan-line-follower",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Workshop dan penyampaian materi pemrograman",
    "penyelenggara": "Semua D",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "21 Februari 2026",
    "gambar": "assets/images/berita3.jpg",
    "caption": "Sesi penyampaian materi",
    "isi": [
      "Pada tanggal 9 Agustus 2025 kegiatan Workshop dan penyampaian materi pemrograman resmi telah berakhir. "
    ]
  },
  {
    "id": "pergantian-pengurus",
    "tipe": "organisasi",
    "kategori": "Organisasi",
    "judul": "Pergantian Pengurus UKM Robotika",
    "penyelenggara": "Pengurus UKM",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "8 Januari 2026",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Serah terima pengurus",
    "isi": [
      "[CONTOH - ganti] Pergantian Pengurus UKM Robotika diselenggarakan oleh Pengurus UKM. Paragraf ini berisi ringkasan: apa, kapan, dan di mana acara berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai pada kegiatan ini.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ]
  },
  {
    "id": "kunjungan-industri",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Rapat Persiapan DIKLAT",
    "penyelenggara": "Divisi BPH",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "19 September 2026",
    "gambar": "assets/images/Screenshot 2026-11-27 103955.png",
    "caption": "rapat persiapan DIKLAT 19 September 2026",
    "isi": [
      "Pada tanggal 19 September 2026, UKM Robotika Politeknik Negeri Jember melaksanakan rapat persiapan DIKLAT. 🔧🤖Rapat ini membahas detail teknis, konsep acara, serta pembagian tugas biar pelaksanaan DIKLAT nanti bisa berjalan lancar dan maksimal. 💡💪Dengan adanya koordinasi ini, diharapkan seluruh panitia dan anggota bisa saling support dan berkontribusi aktif. ✨",
    ]
  },
  {
    "id": "juara-krsti-regional",
    "tipe": "prestasi",
    "kategori": "Prestasi",
    "judul": "Melaju ke Babak Final Kontes Robot Abu Indonesia (KRAI) Nasional",
    "penyelenggara": "Direktorat Pembelajaran dan Kemahasiswaan",
    "peringkat": "Babak penyisihan",
    "tahun": 2026,
    "tanggal": "19 Juni 2026",
    "gambar": "assets/images/al jazari.png",
    "caption": "Tim pada kontes robot nasional",
    "isi": [
      "Satu langkah lebih dekat menuju podium juara! 🏆Keluarga besar UKM Robotika IR64 mengucapkan selamat atas pencapaian luar biasa Tim Al-Jazari yang berhasil melaju ke Babak Final Kontes Robot Abu Indonesia (KRAI) Nasional. ​Apresiasi setinggi-tingginya untuk seluruh anggota tim dan dosen pembimbing yang telah berjuang hingga titik ini. Semoga di babak final nanti, Tim Al-Jazari diberikan kelancaran, kemudahan, dan hasil yang terbaik untuk mengharumkan nama kita bersama.",
    ],
    "tingkat": "nasional"
  },
  {
    "id": "juara-internal-robotik",
    "tipe": "prestasi",
    "kategori": "Prestasi",
    "judul": "Juara Lomba Robot Internal Polije",
    "penyelenggara": "Polije",
    "peringkat": "Juara 1",
    "tahun": 2025,
    "tanggal": "20 September 2025",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Lomba robot internal kampus",
    "isi": [
      "[CONTOH - ganti] Juara Lomba Robot Internal Polije diselenggarakan oleh Polije. Paragraf ini berisi ringkasan: apa, kapan, dan di mana acara berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai pada kegiatan ini.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ],
    "tingkat": "internal"
  },
  {
    "id": "juara-krai-nasional",
    "tipe": "prestasi",
    "kategori": "Prestasi",
    "judul": "Finalis Kontes Robot Indonesia",
    "penyelenggara": "Kemdikbud",
    "peringkat": "Finalis",
    "tahun": 2025,
    "tanggal": "10 Agustus 2025",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Tim di Kontes Robot Indonesia",
    "isi": [
      "[CONTOH - ganti] Finalis Kontes Robot Indonesia diselenggarakan oleh Kemdikbud. Paragraf ini berisi ringkasan: apa, kapan, dan di mana acara berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai pada kegiatan ini.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ],
    "tingkat": "nasional"
  },
  {
    "id": "juara-iot-nasional",
    "tipe": "prestasi",
    "kategori": "Prestasi",
    "judul": "Juara 3 Lomba IoT Nasional",
    "penyelenggara": "Vokasi Nasional",
    "peringkat": "Juara 3",
    "tahun": 2024,
    "tanggal": "2 Juni 2024",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Tim pada lomba IoT nasional",
    "isi": [
      "[CONTOH - ganti] Juara 3 Lomba IoT Nasional diselenggarakan oleh Vokasi Nasional. Paragraf ini berisi ringkasan: apa, kapan, dan di mana acara berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai pada kegiatan ini.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ],
    "tingkat": "nasional"
  },
  {
    "id": "juara-line-tracer-regional",
    "tipe": "prestasi",
    "kategori": "Prestasi",
    "judul": "Juara Line Tracer Regional",
    "penyelenggara": "Regional Jawa",
    "peringkat": "Juara 1",
    "tahun": 2024,
    "tanggal": "15 April 2024",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Tim pada lomba line tracer",
    "isi": [
      "[CONTOH - ganti] Juara Line Tracer Regional diselenggarakan oleh Regional Jawa. Paragraf ini berisi ringkasan: apa, kapan, dan di mana acara berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai pada kegiatan ini.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ],
    "tingkat": "regional"
  },
  {
    "id": "persiapan-krai-2026",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Workshop dan penyampaian materi elektrik",
    "penyelenggara": "Divisi BPH",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "3 Agustus 2025",
    "gambar": "assets/images/penyampaian materi.png",
    "caption": "Penyampaian materi.",
    "ringkas": "Koordinasi antar divisi menyiapkan robot.",
    "isi": [
      "Pada pertemuan kali ini, anggota baru UKM Robotika Polije mendapat materi dasar tentang dunia robotika, dilanjutkan dengan praktik langsung agar ilmu yang diperoleh bisa langsung diterapkan.",
    ]
  },
  {
    "id": "diklat-robot-soccer-2026",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Workshop dan penyampaian materi elektrik",
    "penyelenggara": "Divisi BPH",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "2 Agustus 2025",
    "gambar": "assets/images/ELEKTRIK 2 AGUSTUTS.png",
    "caption": "Penyampaian materi.",
    "ringkas": "Koordinasi antar divisi menyiapkan robot.",
    "isi": [
      "Pada pertemuan kali ini, anggota baru UKM Robotika Polije mendapat materi dasar tentang dunia robotika, dilanjutkan dengan praktik langsung agar ilmu yang diperoleh bisa langsung diterapkan.",
    ]
  },
  {
    "id": "riset-lanjutan-pasca-diklat",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Riset Lanjutan Pasca-Diklat",
    "penyelenggara": "Biro Riset",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "10 Agustus 2026",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Anggota diarahkan ke biro riset.",
    "ringkas": "Anggota diarahkan ke biro riset.",
    "isi": [
      "[CONTOH - ganti] Riset Lanjutan Pasca-Diklat: Anggota diarahkan ke biro riset. Paragraf ini berisi ringkasan apa, kapan, dan di mana kegiatan berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ]
  },
  {
    "id": "modul-diklat-angkatan-baru",
    "tipe": "kegiatan",
    "kategori": "Kegiatan",
    "judul": "Modul Diklat untuk Angkatan Baru",
    "penyelenggara": "Modul",
    "peringkat": "",
    "tahun": "2026",
    "tanggal": "1 Agustus 2026",
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "caption": "Referensi belajar untuk tahun depan.",
    "ringkas": "Referensi belajar untuk tahun depan.",
    "isi": [
      "[CONTOH - ganti] Modul Diklat untuk Angkatan Baru: Referensi belajar untuk tahun depan. Paragraf ini berisi ringkasan apa, kapan, dan di mana kegiatan berlangsung.",
      "[CONTOH - ganti] Peran tim UKM Robotika IR64 POLIJE dan hasil yang dicapai.",
      "[CONTOH - ganti] Penutup dan rencana kegiatan berikutnya."
    ]
  }
];

/* id berita yang jadi 'Sorotan utama' di halaman Berita */
var SOROTAN_ID = 'penyambutan-calon';

var MODUL = [
  {
    "id": "minggu-1-arduino-uno",
    "judul": "Modul Pembelajaran minggu 1",
    "level": "Pemula",
    "kategori": "Mikrokontroler",
    "topik": "Arduino Uno",
    "deskripsi": "Dasar pemasangan board, pin digital, dan koding pertama.",
    "ukuran": "167 KB",
    "tanggal": "3 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/Screenshot 2026-11-24 214733.png",
    "pdf": "assets/modul/1790617388_C_E41261032_Moch_Farhan_Aisy.pdf"
  },
  {
    "id": "minggu-2-esp32",
    "judul": "Modul Pembelajaran minggu 2",
    "level": "Pemula",
    "kategori": "Mikrokontroler",
    "topik": "ESP-32",
    "deskripsi": "Langkah-langkah dasar dalam pemasangan drive dan koding dari nol.",
    "ukuran": "167 KB",
    "tanggal": "4 Januari 2026",
    "tahun": 2025,
    "gambar": "assets/images/Screenshot 2026-11-24 214733.png",
    "pdf": "assets/modul/minggu-2.pdf"
  },
  {
    "id": "minggu-3-sensor-aktuator",
    "judul": "Modul Pembelajaran minggu 3",
    "level": "Pemula",
    "kategori": "Elektronika",
    "topik": "Sensor & Aktuator",
    "deskripsi": "Membaca sensor jarak dan menggerakkan motor servo.",
    "ukuran": "2,3 MB",
    "tanggal": "5 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-3.pdf"
  },
  {
    "id": "minggu-4-line-follower",
    "judul": "Modul Pembelajaran minggu 4",
    "level": "Menengah",
    "kategori": "Robotika",
    "topik": "Line Follower",
    "deskripsi": "Merancang robot pengikut garis dengan kontrol PID.",
    "ukuran": "2,4 MB",
    "tanggal": "6 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-4.pdf"
  },
  {
    "id": "minggu-5-robot-soccer",
    "judul": "Modul Pembelajaran minggu 5",
    "level": "Menengah",
    "kategori": "Robotika",
    "topik": "Robot Soccer",
    "deskripsi": "Strategi dan kontrol robot untuk lomba sepak bola robot.",
    "ukuran": "2,5 MB",
    "tanggal": "7 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-5.pdf"
  },
  {
    "id": "minggu-6-plc-dasar",
    "judul": "Modul Pembelajaran minggu 6",
    "level": "Menengah",
    "kategori": "Otomasi Industri",
    "topik": "PLC Dasar",
    "deskripsi": "Pengantar Programmable Logic Controller untuk lomba vokasi.",
    "ukuran": "2,6 MB",
    "tanggal": "8 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-6.pdf"
  },
  {
    "id": "minggu-7-raspberry-pi",
    "judul": "Modul Pembelajaran minggu 7",
    "level": "Lanjutan",
    "kategori": "Komputer Mini",
    "topik": "Raspberry Pi",
    "deskripsi": "Pengolahan data dan komunikasi antar perangkat.",
    "ukuran": "2,7 MB",
    "tanggal": "9 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-7.pdf"
  },
  {
    "id": "minggu-8-computer-vision",
    "judul": "Modul Pembelajaran minggu 8",
    "level": "Lanjutan",
    "kategori": "AI & Vision",
    "topik": "Computer Vision",
    "deskripsi": "Deteksi objek sederhana dengan kamera.",
    "ukuran": "2,8 MB",
    "tanggal": "10 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-8.pdf"
  },
  {
    "id": "minggu-9-jetson-nano",
    "judul": "Modul Pembelajaran minggu 9",
    "level": "Lanjutan",
    "kategori": "AI & Vision",
    "topik": "Jetson Nano",
    "deskripsi": "Menjalankan model AI pada robot dengan Jetson Nano.",
    "ukuran": "2,9 MB",
    "tanggal": "11 Januari 2026",
    "tahun": 2026,
    "gambar": "assets/images/gambar-kartu-berita.svg",
    "pdf": "assets/modul/minggu-9.pdf"
  }
];
