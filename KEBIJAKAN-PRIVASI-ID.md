# Kebijakan Privasi — Ketenangan Finansial

**Terakhir diperbarui:** 13 November 2026  
**Kontak privasi:** moneyproapp@gmail.com  
**Cara Ketenangan Finansial menyimpan dan melindungi data di perangkat serta menggunakan layanan eksternal.**

## 1. Aplikasi, penanggung jawab, dan tujuan

Ketenangan Finansial (sebelumnya MyMoney) dikembangkan oleh Anselmo Eller dan tersedia di Google Play dengan ID paket Android com.anspro.mymoney.app. Aplikasi ini membantu mengelola pengeluaran, pemasukan, tagihan, tugas, catatan, rekaman, jurnal, dan target tabungan. Aplikasi tidak mengakses rekening bank, tidak mentransfer uang, dan tidak mewajibkan akun daring dari pengembang.

Data yang Anda masukkan digunakan untuk perhitungan, grafik, perkiraan, pengingat, dan pengelolaan pribadi. Isi catatan keuangan dan pribadi tidak dikirim ke pengembang atau digunakan untuk penargetan iklan.

## 2. Data dan penyimpanan lokal

Sesuai fitur yang digunakan, perangkat menyimpan nominal, tanggal, status pembayaran, keterangan, tugas, catatan, jurnal, rekaman, teks hasil pemindaian gambar, target tabungan, serta pengaturan bahasa, negara, mata uang, dan akses. Basis data terstruktur dienkripsi di perangkat dengan AES-256-GCM; kuncinya disimpan dalam penyimpanan aman sistem operasi.

PIN opsional sepanjang 8–16 digit dan biometrik pada perangkat yang mendukung dapat membatasi akses. Aplikasi tidak mengumpulkan templat biometrik. Rekaman audio disimpan di ruang privat aplikasi, tetapi tidak otomatis dienkripsi dengan cara yang sama seperti basis data terstruktur. Tidak ada perlindungan yang dapat menghilangkan seluruh risiko.

## 3. Izin, suara, gambar, dan notifikasi

Mikrofon, kamera, dan gambar yang dipilih digunakan ketika Anda merekam, mendikte, atau memindai teks. Pengenalan teks gambar (OCR) dilakukan secara lokal; gambar asli tidak otomatis disimpan dalam catatan dan berkas sementara dihapus jika memungkinkan. Transkripsi rekaman tersimpan, jika didukung, membutuhkan pengenalan suara di perangkat. Dikte langsung dapat menggunakan layanan suara sistem atau pihak ketiga yang, sesuai pengaturan perangkat, memproses audio melalui internet.

Dengan izin Anda, aplikasi menjadwalkan pengingat lokal untuk tagihan, pemasukan, tugas, dan catatan. Judul atau tanggal jatuh tempo mungkin terlihat pada layar terkunci. Izin dapat ditolak atau dicabut, tetapi fitur yang terkait mungkin tidak dapat digunakan.

## 4. Pencadangan dan ekspor

Cadangan data portabel menggunakan AES-256-GCM dan scrypt. Cadangan manual dilindungi PIN. Pengguna Pro dapat mengaktifkan cadangan otomatis luring di folder lokal pilihannya dengan kunci pemulihan terpisah sepanjang 16 digit. Pengembang tidak menerima kunci tersebut dan tidak dapat memulihkan berkas tanpa kredensial yang benar.

Pencadangan dicoba saat aplikasi terbuka atau kembali ke layar depan; proses tidak dijamin saat aplikasi ditutup. Cadangan data tidak otomatis memuat rekaman audio, yang dapat diekspor dalam paket terenkripsi terpisah. Ekspor jurnal TXT atau rekaman yang dibagikan langsung mungkin tidak terenkripsi. Anda menentukan penyimpanan dan penghapusan berkas ekspor. Pengembang tidak menyediakan pencadangan atau sinkronisasi cloud otomatis.

## 5. Iklan dan persetujuan

Versi gratis dapat menampilkan iklan Google AdMob. SDK dapat memproses alamat IP, pengenal perangkat atau iklan, interaksi iklan, dan diagnostik untuk penayangan, pengukuran, keamanan, serta pencegahan penipuan. Permintaan iklan dikonfigurasi sebagai tidak dipersonalisasi, tetapi pemrosesan data teknis masih mungkin terjadi.

Google User Messaging Platform (UMP) mengelola pilihan privasi dan persetujuan jika diwajibkan oleh hukum; jika tersedia, pilihan dapat ditinjau kembali di Pengaturan. Tidak memberikan persetujuan yang diperlukan untuk iklan tidak memblokir fitur utama keuangan dan pribadi. Pengguna Pro dengan lisensi terverifikasi tidak melihat banner iklan.

## 6. Pembelian Pro dan layanan eksternal

Pembayaran Pro diproses oleh Google Play; aplikasi tidak menerima rincian kartu lengkap. Untuk memverifikasi atau memulihkan lisensi, aplikasi mengirim ID produk, token pembelian, ID permintaan, dan token sementara Play Integrity melalui HTTPS ke layanan verifikasi Google Cloud. PIN, catatan keuangan, catatan pribadi, dan audio tidak dikirim.

Permintaan kurs kepada API Frankfurter hanya berisi kode mata uang, bukan saldo. Google, Frankfurter, GitHub Pages sebagai penyedia hosting halaman ini, serta situs yang Anda kunjungi secara sukarela dapat memproses data teknis koneksi seperti alamat IP sesuai kebijakan masing-masing.

## 7. Penyimpanan, penghapusan, dan transfer data

Data lokal tetap berada di perangkat hingga Anda menghapusnya, membersihkan data aplikasi, atau mencopotnya. Fitur pembersihan memungkinkan pemilihan profil dan kategori. Salinan ekspor atau berkas yang dibagikan harus dihapus secara terpisah. Pengembang tidak dapat membaca, menghapus, atau memulihkan basis data terenkripsi di perangkat dari jarak jauh.

Penyedia eksternal dapat menyimpan log teknis untuk operasional, keamanan, pencegahan penipuan, atau kewajiban hukum sesuai masa simpan masing-masing. Layanan tersebut dapat memproses data teknis lintas negara dengan perlindungan yang berlaku; masa simpan pihak ketiga tidak berada di bawah kendali kami.

## 8. Dasar pemrosesan dan hak pengguna

Pemrosesan lokal diperlukan untuk menyediakan fitur yang Anda pilih. Jika relevan, verifikasi pembelian dan pencegahan penipuan berkaitan dengan penyediaan layanan serta kepentingan sah di bidang keamanan. Penggunaan iklan yang memerlukan persetujuan mengikuti pilihan Anda dan hukum setempat. Kewajiban hukum juga dapat berlaku.

Sesuai peraturan yang berlaku, termasuk hukum perlindungan data di Indonesia dan LGPD Brasil jika relevan, Anda dapat meminta informasi, akses, perbaikan, penghapusan, atau menjalankan hak lainnya, termasuk menarik persetujuan jika berlaku. Untuk data yang dikendalikan pengembang, hubungi moneyproapp@gmail.com. Data yang hanya ada di perangkat dikelola melalui aplikasi; untuk data pihak ketiga, hubungi penyedianya.

## 9. Anak-anak dan perubahan

Aplikasi ini tidak secara khusus ditujukan untuk anak-anak. Gunakan sesuai klasifikasi usia Google Play dan pendampingan orang tua bila perlu.

Kebijakan akan diperbarui jika fitur, penyedia, atau kewajiban hukum berubah. Tanggal di atas menunjukkan versi yang berlaku.

