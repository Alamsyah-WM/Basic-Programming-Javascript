// If ~> membuat keputusan eksekusi program atau tidak
const score = 85;

if (score > 90) {
    console.log('Selamat, Anda mendapatkan nilai A!');
} else if (score > 80) {
    console.log('Selamat, Anda lulus ujian!');
} else {
    console.log('Maaf, Anda belum lulus ujian.');
}


// Ternary operator membutuhkan tiga operan below:
// 1. Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
// 2. Ekspresi yang dieksekusi jika kondisinya benar.
// 3. Ekspresi yang dieksekusi jika kondisi salah.
const price = 100000;
const isMember = true;
const discount = isMember ? 0.1 : 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`);


// Switch case ~> control flow statement yang mengevaluasi expression terhadap beberapa kasus.
const day = new Date().getDay();

switch (day) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}
