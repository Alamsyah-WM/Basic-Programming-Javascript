// Return value untuk menyimpan nilai
// return ~> Return Keyword | result ~> Return Value/Expression

function sumNumbers(a, b) {
    const result = a + b;
    return result;
}

const result = sumNumbers(2, 4);
console.log('2 + 4:', result);
/* Output:
2 + 4: 6
  */

// Return Value with function below:
function convertCelsiusToFahrenheit(temperature) {
    const result = (9 / 5) * temperature + 32;
    return result;
}

const temperatureInFahrenheit = convertCelsiusToFahrenheit(90);
console.log('Hasil konversi:', temperatureInFahrenheit);
/* Output:
Hasil konversi: 194
*/