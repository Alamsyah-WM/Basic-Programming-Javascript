// Export keyword untuk melabeli suatu function/method/variable
// Tambahan berikut contoh Default Export
// Diambil oleh 1 dan 2
export default function myFunction() {
    console.log('Ini adalah function export default.');
  }

// Tambahan berikut contoh named Export
// Diambil oleh Named Import
const name = 'John';
const email = 'john@gmail.com';
const age = 25;

export { name, email, age };

// Tambahan berikut contoh named Export
// Diambil oleh Import Alias
export function myFunction() {
    console.log('Ini dari import.js');
  }