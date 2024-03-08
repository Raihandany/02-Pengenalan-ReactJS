This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Laporan Praktikum

|  | Pemrograman Berbasis Framework 2024 |
|--|--|
| NIM |  2141720166|
| Nama | Raihan Dany Radhinnur |
| Kelas | TI - 3I |


## Jawaban Soal 1
Pada gambar tersebut, silakan Anda browsing apa yang dimaksud dengan:

<br> TypeScript    : Microsoft mengembangkan TypeScript, bahasa pemrograman sumber terbuka. Ini adalah superset JavaScript yang mengubah data statistik operasional dan fitur kontemporer ke dalam bahasa target. TypeScript memungkinkan pemrogram menulis kode JavaScript yang lebih terorganisir, aman, dan mudah diedit.</br>
<br> ESLint        : ESLint dapat diatur untuk menganalisis kode JavaScript dan menemukan masalah potensial. Ini membantu dalam penerapan standar gaya kode, menemukan bug, dan menerapkan praktik terbaik dalam pengembangan JavaScript. </br>
Tailwind CSS  : Tailwind CSS adalah kerangka kerja CSS yang dapat disesuaikan yang memungkinkan Anda membuat antarmuka web dengan cepat dengan menggunakan berbagai kelas utilitas. Anda dapat dengan cepat membangun tata letak dan gaya dengan menggunakan kelas Tailwind daripada menulis CSS khusus dari awal. Ini mempercepat proses pengembangan dan memastikan konsistensi gaya di seluruh proyek.
App Router    : App Router adalah komponen aplikasi yang menangani rute atau URL yang diminta pengguna dan menentukan apa yang harus ditampilkan sebagai tanggapan. Dalam kasus Node.js, ini dapat dicapai dengan menggunakan berbagai modul, seperti Express.js, untuk membuat router yang menangani permintaan HTTP.
Import alias  : Cara untuk membuat alias atau nama alternatif untuk modul yang diimpor dalam kode JavaScript/TypeScript adalah import alias. Ini memungkinkan pengembang untuk mengimpor modul dengan nama yang lebih singkat atau deskriptif, membuat kode lebih mudah dibaca dan dipelihara. Misalnya, dalam TypeScript, Anda dapat menggunakan fitur seperti "mengimpor modul foo dengan alias bar" untuk mengimpor modul foo. Ini dapat dicapai dengan menggunakan alat seperti Babel atau konfigurasi bundler dalam JavaScript murni.

## Jawaban Soal 2
Pada struktur project tersebut, jelaskan kegunaan folder dan file masing-masing tersebut!
node_modules: Direktori ini berisi semua modul JavaScript yang diperlukan untuk proyek Anda. Jika Anda menggunakan pengendali paket seperti npm atau Yarn untuk menginstal paket dalam proyek ReactJS Anda, modul-modul ini akan diunduh dan disimpan di dalam direktori node_modules.
public: Direktori ini berisi file statis yang akan disajikan oleh server web, seperti gambar, font, atau file HTML yang diperlukan untuk mengakses aplikasi React Anda. Misalnya, file index.html, yang berfungsi sebagai titik masuk untuk aplikasi React, biasanya disimpan di dalam direktori public.
src: Direktori ini berisi kode sumber utama aplikasi React Anda. Ini adalah tempat biasanya disimpan komponen, halaman, logika bisnis, dan file lain yang terkait.
.eslintrc.json: berkas yang digunakan oleh ESLint, alat yang digunakan untuk melakukan analisis statis kode JavaScript/TypeScript. Di dalam.eslintrc.json, Anda dapat mengatur aturan gaya kode serta aturan lainnya yang ingin diterapkan dalam proyek Anda.
.gitignore: berkas yang memungkinkan Anda untuk menentukan direktori dan file mana yang harus diabaikan oleh Git saat melakukan komit. Ini memungkinkan Anda mengabaikan file sementara, file konfigurasi lokal, dan file lainnya yang tidak perlu disertakan dalam repositori Git.
next-env.d.ts: berkas yang termasuk dalam Next.js dan berisi definisi tipe untuk lingkungan Next.js serta konfigurasi TypeScript yang diperlukan untuk Next.js.
next.config.mjs: berkas ini digunakan untuk konfigurasi Next.js, di mana Anda dapat mengatur berbagai opsi konfigurasi Next.js, seperti konfigurasi lingkungan atau pengaturan webpack yang disesuaikan.
package-lock.json: berkas yang dibuat oleh npm dan digunakan untuk mengunci versi paket yang telah diinstal dalam proyek Anda. Ini memastikan bahwa versi paket yang digunakan sama di lingkungan pengembangan dan produksi.
package.json: berkas manifest untuk proyek Node.js dan berisi nama, deskripsi, versi, dan daftar dependensi yang diperlukan. Ini juga digunakan untuk mengidentifikasi skrip yang dapat dilaksanakan serta informasi proyek lainnya.
postcss.config.js: konfigurasi berkas untuk alat PostCSS, yang digunakan untuk memproses dan mengotomatisasi CSS. Di dalam berkas ini, Anda dapat memilih plugin PostCSS mana yang ingin Anda gunakan.
README.md: Berkas berisi instruksi proyek Anda dalam markdown. Ini menjelaskan cara menginstal, mengonfigurasi, dan menggunakan proyek React Anda kepada pengguna lain atau anggota tim.
tailwind.config.ts: berkas konfigurasi Tailwind CSS, kerangka kerja CSS yang dapat disesuaikan. Di sini, Anda dapat mengatur berbagai konfigurasi Tailwind CSS, termasuk pengaturan responsif, warna, dan font.
tsconfig.json: berkas konfigurasi untuk bahasa pemrograman TypeScript, yang digunakan dalam pengembangan proyek React. Di dalam berkas ini, Anda dapat mengatur opsi kompilasi TypeScript, seperti target JavaScript, modul, dan pilihan lainnya.

## Jawaban Soal 3
Ketika Anda telah berhasil mengganti teks tersebut, Anda tidak perlu menjalankan perintah npm run dev dan tidak juga diperlukan me-reload halaman di browser. Tiba-tiba perubahan itu tampil, Mengapa terjadi demikian? Jelaskan!

![Screenshot](assets-report/soal3.png)

Karena penggunaan fitur Hot Module Replacement (HMR), mungkin ada situasi di mana Anda hanya perlu menjalankan perintah npm run dev sekali dan perubahan akan muncul tanpa perlu me-reload halaman browser.

Teknologi Hot Module Replacement (HMR) memungkinkan perubahan dalam kode sumber aplikasi langsung dicerminkan ke dalam aplikasi yang sedang berjalan tanpa perlu menjalankan kembali server atau me-reload seluruh halaman. Dengan kata lain, ketika Anda menyimpan perubahan dalam kode sumber Anda, perubahan tersebut secara otomatis diterapkan ke aplikasi yang sedang berjalan tanpa perlu melakukan tindakan tambahan.

## TUGAS PRAKTIKUM




