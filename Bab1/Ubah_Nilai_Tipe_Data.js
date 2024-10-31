// Konversi eksplisit adalah cara yang paling dapat diandalkan untuk mengubah tipe data karena dilakukan dengan instruksi yang jelas, alias eksplisit dari programmer
// Mengubah ke string ~> menggunakan fungsi String() dan method .toString()

const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

// Mengubah ke Number ~> menggunakan fungsi Number()
// Dalam Number, nilai Boolean direperesnetasikan dengan 1 (true) dan 0 (Flase)

const strNumber = '123';
const strFloat = '3.14';
const boolean = true;

const numFromString = Number(strNumber);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(boolean);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

// Selain menggunakan Number() terdapat fungsi lain seperti parseInt() dan parseFloat()
// ParseInt ~> konversi string menjadi bilangan bulat (integer)
// ParseFloat ~> konversi string menjadi angka desimal (floating point number)

// ParseInt
const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64

// ParseFloat
const cm = '20.55cm';
const px = '64.23px';

const floatFromCM = parseFloat(cm);
const floatFromPX = parseFloat(px);

console.log(floatFromCM); // output: 20.55
console.log(floatFromPX); // output: 64.23

//  Mengubah ke Boolean ~> menggunakan fungsi Boolean()

const number = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true

// Konversi Implisit terjadi ketika Javascript otomatis mengubah tipe data tanpa instruksi eksplisit dari programmer.
// biasanya terjadi dalam konteks tertentu, seperti operasi aritmetika, perbandingan, dan konteks logika. 

// Tipe data number(age) secara otomatis dikonversi menjadi string karena operator + digunakan untuk penggabungan string
const age = 20;
const message = 'Umurku: ' + age;

console.log(message); // output: Umurku: 20

// strNumber(yang merupakan string) dikonversi menjadi number karena operator * dalam operasi aritmatika
const strNumber = '123';
const result = strNumber * 2;

console.log(result); // output: 246

// Contoh lain penggunaan operasi aritmatika yang mengubah nilai boolean mejadi number
const bool = true;
const result = 1 + bool;

console.log(result); // output: 2