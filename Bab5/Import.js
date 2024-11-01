// Default export tidak memerlukan nama spesifik
// 1. Export default myFunction
export myFunction from './export.mjs';

myFunction();

// 2. Default export memungkinkan untuk export function/method/variable yang namanya  tidak harus sama dengan function/method/variable, contoh below:
export result from './export.mjs';

result(); // Hasil akan sama seperti diatas


// Named export memungkinkan export function/method/variable berdasarkan namanya. pastikan nama funsgi yang ingin diimpor sesuai
export { name, email, age } from './export.mjs';

console.log(name);
console.log(email);
console.log(age);

// Jika modulnya banyak bisa pakai export *
export * as variable from './export.mjs';

console.log(variable.name);
console.log(variable.email);
console.log(variable.age); 
// Hasil sama seperti diatas


// Studi kasus memiliki function dengan nama myFunction di dua modul berbeda, lalu ingin menggunakan kedua unction tersebut di satu modul, maka akan terjadi error
// Gunakan export alias sebagai solusi 
export { myFunction as userFunction } from './export.mjs';
export { myFunction as customerFunction } from './export1.mjs';

userFunction();
customerFunction();