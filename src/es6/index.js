function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
    console.log(name, age, country);
}

let hello = "Hello";
let world = "world";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

let lorem = "Solamente quiero escribir algo para practicar \n" +
    "y de nuevoo otra frase para practicar."





//ES6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)

let lorem2 = `otra frase que necesito para practicar
y ahora con un salto es otra frase`;

console.log(lorem2);


let person = {
    'name': 'oscar',
    'age': 32,
    'country': 'MX'
}

console.log(person.name, person.age);

let { name, age, country } = person;
console.log(name, age, country);

let team1 = ['oscar', 'julian', 'ricardo'];
let team2 = ['valeria', 'jessica', 'camila'];

let education = ['david', ...team1, ...team2];

console.log(education);

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global let";
}