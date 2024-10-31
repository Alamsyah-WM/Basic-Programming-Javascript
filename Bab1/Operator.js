// Operator ~ simbol atau teks untuk operasi seperti aritmetika, penugasan, logika, tipe data atau operasi lain berhubungan dengan pemrograman
// Operan ~> nilai yang menjadi target dari sebuah operasi.
// contoh ~> 5 + 4. Operatornya simbole + sedangkan operan 5 dan 4
// Operator Arimetika/Binary ~> + - dsb. karena memerlukan 2 operan 
// Operator TipeData/Unary ~> typeof. karena memerlukan 1 operan
// Operator Ternary ~> memerlukan 3 operan

let age = 25;

// Unary operator
typeof age;

// Binary operator
5 + 4;
10 / 2;
age = 30;

// Ternary operator (conditional operator)
(age < 18) ? 'You are too young!' : 'Welcome onboard!'; 

// Assignment Operator ~> untuk memberikan nilai kepada sebuah variabel. Simbole (=)
// Arithmethic Operator ~ untuk proses aritmetika, 
// ex: +, -, *, /, %(Sisa bagi/modulus), ++, --, **(pangkat)
// Comparasion Operator ~> untuk membandingkan dua nilai dan mengembalikan nilai boolean
// ex: ==(sama 1==1 | 1=='1' true), !=(tidak sama), ===(identik 1==1 true | 1=='1' false), !==(tidak identik), >, >=, <, <=
// Logical Operator ~> untuk operasi gerbang logika
// ex: &&(AND), ||(OR), !(NOT)
// String Operator ~> untuk menggabungkan 2 nilai string
// ex: Simbol (+)
const first = 'bekerja';
const second = 'sama';
const merged = first + second;

console.log(merged); // Output: bekerjasama