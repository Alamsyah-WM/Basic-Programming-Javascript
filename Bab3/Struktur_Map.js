// Map ~> Tipe data mirip dengan object untuk simpan data dengan key-value
// Fungsi untuk menutupi kekurangan object, Map dapat menggunakan tipe data apapun, tidak seperti object hanya menerima string

const productMap = new Map([
    ['shoes', 500],
    ['cap', 350],
    ['jeans', 250]
]);

console.log(productMap); //Output: Map(3) { 'shoes' => 500, 'cap' => 350, 'jeans' => 250 }

// Menyimpan nilai di Map
const map = new Map();
map.set('name', 'aras');
console.log(map); // Map(1) { 'name' => 'aras' }

const map = new Map();
map.set(1, 'number one');
console.log(map); // Map(1) { 1 => 'number one' }


// Access nilai di Map with get
const map = new Map();
map.set('name', 'aras');
console.log(map.get('name')); // Output: aras


// Delete Nilai di Map
const map = new Map();
map.set('name', 'aras');
map.set('last name', 'opraza');
map.delete('last name');
console.log(map); // Map(1) { 'name' => 'aras' }