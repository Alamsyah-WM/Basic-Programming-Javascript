// Deklarasi Function

// function ~> Function keyword
// converCelsiusToFahrenheit() ~> Identifier
// {} ~> Function body | Example below:
function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;

    console.log('Hasil konversi:', temperatureInFahrenheit);
}

const temperatureInCelsius = 90;

  // Hanya menampilkan nilai function
console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]

  // Akan menjalankan isi function
convertCelsiusToFahrenheit(temperatureInCelsius);
  // Output => Hasil konversi: 194


// 
// temperature = 50 ~> Parameter | Example Below:
function convertCelsiusToFahrenheit(temperature = 50) {
  const temperatureInFahrenheit = 9 / 5 * temperature + 32;

  console.log('Hasil konversi:', temperatureInFahrenheit);
}

// Menggunakan default value
convertCelsiusToFahrenheit(); // output: Hasil konversi: 122
// Menggantikan default value
convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194

// 
// Function Expression ~> kode yang mengembalikan nilai function
const convertCelsiusToFahrenheit = function (temperature) {
  const result = (9 / 5) * temperature + 32;
  return result;
};

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);

/* Output:
Hasil konversi: 194
*/

// 
// function dapat diperlakukan layaknya variabel, function tersebut dinyatakan sebagai first-class citizen.
// function dapat jadikan sebagai nilai dan disimpan dalam variabel, nilai argumen function lain, mengembalikan nilai function dari suatu function, dsb.
// Intinya keutungan function as first class citizen:
// - Dapat disimpan sebagai nilai dalam variable
// - Dapat dikembalikan dari suatu function
// - Dapat dikirimkan sebagai parameter bagi function lain
// - Dapat disimpan dalam elemen array dan object literal
// - Dapat memiliki method dan properties sendiri 
function multiply(a, b) {
  return a * b;
}

function calculate(operation, numA, numB) {
  return operation(numA, numB);
}

const result = calculate(multiply, 2, 4);
console.log(result);

/* Output:
8
*/

