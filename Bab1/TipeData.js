// Tipe Data Primitif atau Dasar=
// String ~> Teks

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);

// Number ~> Data angka | Selain angka normal umber juga memiliki angka special yaitu infinity dan NaN

const result = 50 / 0;
console.log(result); // output: Infinity

const result = Number('Dicoding');
console.log(result); // output: NaN

// Boolean ~> Nilai True dan False

const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

// Nilai kosong ~> Nilai null dan Undefined

const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}