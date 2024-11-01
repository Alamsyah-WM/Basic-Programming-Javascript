// For ~> Metode looping paling umum
// For Loop 
for (let i = 0; i < 5; i++) {
    console.log(`Angka ke-${i} adalah ${i}`);
}


// For In  digunakan untuk pengulangan pada  object 
const person = { name: 'Fulan', origin: 'Bandung', birthYear: 2024 };

for (const property in person) {
console.log(`${property} bernilai ${person[property]}`);
}
// Hasil below: 
// name bernilai Fulan
// origin bernilai Bandung
// birthYear bernilai 2024


// For Of 
const names = ['Bebek', 'Ayam', 'Telor', 'Tempe'];

for (const item of names) {
    console.log(item);
}  //Result below:
// Bebek
// Ayam
// Telor
// Tempe


// While mengekseskusi statement ketika kondisi bernilai truthy
let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} // Result same as For Loop


// Do-While tidak beda jauh dengan While hanya perbedaan urutan pengecekan kondisi
// do {
//     // Do something
//   } while (condition)
let i = 0;
do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);


// Control statement ~> Break and Continue
// Break untuk memberitahu interpreter yang sedang eksekusi kode untuk stop dan langsung pindah ke akhir dari perulangan
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
  
    console.log(i); // Hasil akan muncul 0-4 karena di break sampai 5 , sehingga tidak dilanjutkan
  }

// Continue sama seperti break namun melanjutkan iterasi ke iterasi berikutnya
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i); // Hasil akan muncul 0-9 , namun tidak ada 5 karena nilai i sama dengan 5 maka iterasi akan di stop dan lanjut ke iterasi berikutnya
  }