const data = {
    frontend: 'Ricardo',
    backend: 'Isabel',
    design: 'Oscar',
}

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);

const string = 'hello';
console.log(string.padStart(7, 'hi'));
console.log(strig.padEnd(12, '-------'));

const obj = {
    name: 'oscar',
}

const helloWordl = () => {
    return new Promise((resolve, reject) => {
        (true) ?
        setTimeout(() => resolve('Hellow World'), 3000): reject(new Error('Test Error'))
    })
};

const helloAsync = async() => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();

const anotherFunction = async() => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();