// Spread ~> Menyebarkan nilai yang ada pada object dan array. ditandai dengan tiga titik 
// Dengan menggunakan spread operator, nilai object dan array dapat di-iterable menjadi beberapa element. 
const obj1 = { name: 'Dicoding' };
const obj2 = { lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' };
const newObj = { ...obj1, ...obj2 };

console.log(newObj); // Output: { name: 'Dicoding', lastName: 'Indonesia', address: 'Jl. Batik Kumeli No 50' }

// dari code diatas spread operator dapat mempermudah menggabungkan dua object. Selain mempermudah menggabungkan object, spread operator juga mempermudah untuk menyalin object seperti berikut ini.
const originalObj = { name: 'Dicoding', age: 9 };
const copiedObj = { ...originalObj };

console.log(copiedObj); // Output: { name: 'Dicoding', age: 9 }


// Spread with Array
const array1 = ['Dicoding'];
const array2 = ['Indonesia', 'Jl. Batik Kumeli No 50'];
const newArray = [...array1, ...array2];

console.log(newArray); // Output: ['Dicoding', 'Indonesia', 'Jl. Batik Kumeli No 50']

// Copy 
const original = ['apple', 'banana', 'cherry'];
const copy = [...original];

console.log(copy); // Output: ['apple', 'banana', 'cherry']