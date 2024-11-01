// Try-Catch ~> Try  blok menangani error. catch blok yang dibangkitkan ketika terjadi error didalam blok try
try {
    console.log('Memulai program');
    throw new Error('Error: Program berhenti');
    console.log('Mengakhiri program');
} catch (err) {
    console.log('Karena ada error, blok ini akan dieksekusi');
} // Hasil below: error muncul karena ada throw new Error pada line 4
// Memulai program
// Karena ada error, blok ini akan dieksekusi


// Finally ~> Blok kode yang berada di akhir try-catch. Tidak peduli ada error atau tidak dalam try
try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
  } catch (err) {
    console.log('Ini catch block');
  } finally {
    console.log('Ini finally block');
  } // Hasil Below:
//   Ini try block
//   Ini catch block
//   Ini finally block
