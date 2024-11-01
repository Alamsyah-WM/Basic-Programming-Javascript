// Rest ~> Memungkinkan function menerima argument dalam bentuk array.
// Rest operartor digunakan pada parameter fungsi sering disebut Rest Parameter
function myFunc(...manyMoreArgs) {
    console.log('manyMoreArgs', manyMoreArgs); // Output: manyMoreArgs [ 'one', 'two', 'three' ]
}

myFunc('one', 'two', 'three'); 


// Jika ada parameter lain sebelumnya, nilainya tidak menjadi bagian array yang dihasilkan rest parameter
function myFunc(number, ...manyMoreArgs) {
    console.log('number', number); // Output: number one
    console.log('manyMoreArgs', manyMoreArgs); // Output: manyMoreArgs ['two', 'three' ]
}

myFunc('one', 'two', 'three'); 


// Method array.length dapat digunakan pada rest parameter Below:
function myFunc(...manyMoreArgs) {
    console.log(manyMoreArgs.length); // Output: 3
    console.log('manyMoreArgs', manyMoreArgs);  // Output: manyMoreArgs ['one', 'two', 'three' ]
}

myFunc('one', 'two', 'three');


// Rest operator with Destructuring array untuk menangkap seluruh sisa elemen terakhir dalam bentuk array
const favorites = ['Nasi Goreng', 'Mie Goreng', 'Ayam Bakar', 'Tahu', 'Tempe'];

const [first, second, ...rest] = favorites;

console.log(first);
console.log(second);
console.log(rest);

/**
 * output:
 * Nasi Goreng
 * Mie Goreng
 * [ 'Ayam Bakar', 'Tahu', 'Tempe' ]
 */