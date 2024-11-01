// Set ~> Struktur data spesial, tidak memiliki key dan indeks ketika menyimpan data
// Data yang disimpan bernilai unik (tidak akan ada data yang duplikat)
const mySet = new Set([1, 2, 3]);
console.log(mySet); //Output: Set(3) { 1, 2, 3 }


// Simpan nilai di set
const set = new Set();
set.add(1);
set.add('Apple');
set.add(1);
set.add('Apple');

console.log(set); // Output: Set { 1, 'Apple' } Ingat set tidak menyimpan nilai Duplikat


// Access Nilai di set
const set = new Set();
set.add(1);
set.add(2);

// With foreach
set.forEach((value) => console.log(value)); // Output: 1, 2

// With looping
for (const number of set) {
  console.log(number); // Output: 1, 2
}

// 
// Menghapus Nilai di set
const set = new Set();
set.add(1);
set.add(2);
set.delete(1);

console.log(set); // Set(1) { 2 }