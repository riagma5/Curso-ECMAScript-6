// function newFunction(name, age, country) {
//     var name = name || 'oscar';
//     var age = age || 32;
//     var country = country || 'MX'
//     console.log(name, age, country);
// }

// let hello = "Hello";
// let world = "world";
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase);

// let lorem = "Solamente quiero escribir algo para practicar \n" +
//     "y de nuevoo otra frase para practicar."





// //ES6
// function newFunction2(name = 'oscar', age = 32, country = 'MX') {
//     console.log(name, age, country);
// }

// newFunction2();
// newFunction2('Ricardo', 23, 'CO');

// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2)

// let lorem2 = `otra frase que necesito para practicar
// y ahora con un salto es otra frase`;

// console.log(lorem2);


// let person = {
//     'name': 'oscar',
//     'age': 32,
//     'country': 'MX'
// }

// console.log(person.name, person.age);

// let { name, age, country } = person;
// console.log(name, age, country);

// let team1 = ['oscar', 'julian', 'ricardo'];
// let team2 = ['valeria', 'jessica', 'camila'];

// let education = ['david', ...team1, ...team2];

// console.log(education);

// {
//     var globalVar = "Global Var";
// }

// {
//     let globalLet = "Global let";
// }

// let name = 'oscar';
// let age = 32;

// obj = { name: name, age: age };

//TTrabajo con objetos
let name = 'Ricardo';
let age = 32;

ob = { name: name, age: age };
obj2 = { name, age };

//Arrows
const names = [
    { name: 'Ricardo', age: 32 },
    { name: 'Jessica', age: 27 }
]

let listOfNames = names.map(function(item) {
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames3 = (name, age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!');
        } else {
            reject('Ups!');
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//Clases
class calculator {
    constructor() {
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//importar
import { hello } from './module';
hello();

function* helloWorld() {
    if (true) {
        yield 'hello, ';
    }
    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);