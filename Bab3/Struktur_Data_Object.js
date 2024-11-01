// Object ~> Tipe data non-primitif, kumpulan pasangan value 
// cara untuk membuat object seperti menggunakan object constructor atau Object Literals
// Object literals use {}


const user = {
    name: 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

// Access with dot
console.log(user.name); // Output: Dicoding
// Access with square bracket
console.log(user['last name']); // Output: Indonesia
// Access with object destructing
const { name, lastName } = user;
console.log(name, lastName); // Output: Dicoding Indonesia

// Object Destructuring berguna ketika anda memiliki banyak object dengan properti yang banyak dan ingin ambil nilai properti

const user = {
    id: 24,
    email: 'aras@dicoding.com',
    name: 'Arsy',
    nickname: 'Aras',
    username: 'aras123',
    password: 'secret',
};
// With object destructuring
const { id, email } = user;
console.log(id, email);

// Without object destructuring same result
const id = user.id;
const email = user.email;
console.log(id, email);

// 
// Mengubah nilai properti object
// Nilai yang ada di object dapat diubah karena object berbeda dengan number, string, dan boolean yang nilainya tidak mungkin berubah
// nilai properti dapat diubah karena kita hanya mengubah nilainya bukan menginisialisasi ulang properti dari object tersebut
const account = {
    balance: 1000,
    debt: 10,
};

account.balance = 2000;
console.log(account.balance); // Output: 2000

// 
// Menghapus properti di object

const user = {
    'name': 'Dicoding',
    'last name': 'Indonesia',
    age: 9,
};

// dengan operator titik
delete user.age;
// dengan operator delete
delete user['age'];
// Hasil dari 2 diatas same with below
console.log(user); // Output: { name: 'Dicoding', 'last name': 'Indonesia' }