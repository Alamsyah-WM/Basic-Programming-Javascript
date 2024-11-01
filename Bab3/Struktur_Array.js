// Array ~> Menyimpan kumpulan data berurut
const users = new Array('5');
console.log(users); // Output: ["5"]


// Array with sintaks array.from
const foo = Array.from('foo');
console.log(foo); // Output: ['f', 'o', 'o']


// Array.from merupakan method untuk membuat array yang diperkenalkan di ES6.
const users = new Array('John', 'Jane', 'Jack', 'Jill');
const customer = Array.from(users);
console.log(customer); // Output: ["John", "Jane", "Jack", "Jill"]


// cara yang paling mudah, singkat, dan disarankan untuk membuat array adalah menggunakan object literals.
const fruits = ['apple', 'banana', 'cherry', '', 'grape'];

console.log(fruits[1]) // Output: ['banana']
console.log(fruits); // Output: ['apple', 'banana', 'cherry', '', 'grape']

// Menggubah nilai Array with indexing
const myArray = [1, 2, 3, 4, 5];
myArray[1] = 10;
console.log(myArray); // Output: [1, 10, 3, 4, 5]

// Menambah nilai Array with push
const myArray = [1, 2, 3, 4, 5];
myArray.push(6);
console.log(myArray); // Output: [1, 2, 3, 4, 5, 6]

// Menghapus Element dan Data Array
// With operator or keyword delete for deleting data on array
const myArray = ['Android', 'Data Science', 'Web'];
delete myArray[1];
console.log(myArray); // Output: ['Android', <1 empty item>, 'Web']

// Data array sudah dihapus diatas, but elementnya masih ada <1 empty item>
// user method splice(). Require 2 parameter yaitu indeks dari element yang ingin dihapus dan jumlah element yang ingin di hapus
const myArray = ['Android', 'Data Science', 'Web'];
myArray.splice(1, 2);
console.log(myArray); // Output: ['Android']


// Last way with method shift and pop. kekurangan ke-2 method ini tidak fleksible as delete and splice
// shift hanya menghapus element pertama and pop for element terakhir.
const myArray = ['Android', 'Data Science', 'Web'];

myArray.shift();
console.log(myArray); // Output: ['Data Science', 'Web']

myArray.pop();
console.log(myArray); // Output: ["Android", "Data Science"]


// Reverse ~> Method untuk membalikkan nilai array
const myArray = ['Android', 'Data Science', 'Web'];
myArray.reverse();
console.log(myArray); // Output: [ 'Web', 'Data Science', 'Android' ]


// Sort ~> Method untuk mengurutkan nilai array, default ascending
const myArray = ['Web', 'Android', 'Data Science'];
myArray.sort();
console.log(myArray); // Output: [ 'Android', 'Data Science', 'Web' ]