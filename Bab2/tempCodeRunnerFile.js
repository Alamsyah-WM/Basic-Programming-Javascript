function hello(name, origin = "Bandung") {
    return `Halo! Nama saya ${name}. Saya tinggal di ${origin}.`;
}

let rahmat = hello('rahmat', 'Semarang');

let indra = hello('Indra');

console.log(rahmat);
console.log(indra);