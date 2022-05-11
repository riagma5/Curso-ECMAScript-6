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

//ES6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);
}

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2)