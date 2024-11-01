// ESModule diperlukan dalam konfigurasi project node.js.
// Error pada import dan export bisa terjadi di local computer karena tidak ada ESM
//  Berikut cara yang dapat kita terapkan jika ingin menggunakan ES Modul di Node.js.
// 1. Ubah ekstensi berkas dari .js menjadi .mjs 
// 2. Tambahkan konfigurasi di package.json dengan cara menambahkan "Type" : "Module" di dalamnya

// ESModule tak hanya dapat digunakan pada Node.js, tetapi juga di browser
// Caranya adalah dengan menambahkan type pada saat memanggil tag script  <script src="./esmodule.js" type="module">

// Perlu diingat bahwa tidak semua browser mendukung ESModule sehingga untuk menangani hal itu, tambahkan kode berikut ini.
// <script nomodule src="fallback.js"></script> nomodule akan info ke browser untuk memuat berkas fallback.js jika tidak support ESModule.

// Cara menambahkan Jvascript dengan ESModule secara inline below : 
/* <script type="module">
  import App from "./app.js";
  console.log(App);
</script> */
