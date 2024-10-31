// Variable dalam javascript terdiri dari const dan let

const id = 123;
let username = 'Dicoding';

console.log(id); // output: 123
console.log(username); //output: Dicoding

// Perbedaan const dan let
// Const variable yang tidak dapat diinisiasi ulang/diubah nilainya, sedangkan let bisa diubah
// Contoh inisiasi ulang dari let=

let username = 'Dicoding';
console.log('Sebelum diubah:', username); // output: Sebelum diubah: Dicoding

username = 'dicodingacademy';
console.log('Setelah diubah:', username); // output: Setelah diubah: dicodingacademy

// Aturan penamaan variable=
// Tidak boleh memberikan nama yang sama dalam cakupan yang sama, nama variabel harus unik dalam cakupannya
// Nama Variabel hanya terdiri dari karakter tertentu seperti huruf, angka, underscore(_), dolar($)
// Nama variable tidak boleh diawali dengan angka

// Contoh penamaan variable error=

// Company data
const name = 'Dicoding';
const legal = 'LLC';

// Employee data
const name = 'John'; // SyntaxError: Identifier 'name' has already been declared
const division = 'IT';

//Nama variable boleh sama selama cakupannya berbeda, contohnya=

function printCompanyInfo() {
    const name = 'Dicoding'; // <- nama variabel sama
    const legal = 'LLC';
    
    console.log('Company name:', name);
    console.log('Legal type:', legal);
}

function printEmployeeInfo() {
    const name = 'John'; // <- nama variabel sama
    const division = 'IT';
    
    console.log('Employee name:', name);
    console.log('Division:', division);
}

printCompanyInfo();
printEmployeeInfo();