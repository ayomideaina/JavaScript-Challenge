// for loop
for(let i = 0; i <= 5; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}

for(let i = 1; i <= 10; i++){
    if (i % 2 !== 0)
    console.log(i);
}

// Develop a small script which generate any number of characters random id:
const length = 10; 

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

let result = '';
for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
}
console.log(`Random ID: ${result}`);

// a script which generates a random hexadecimal number.
const len = 6; 
const randomNumber = Math.floor(Math.random() * Math.pow(16, len));
const hexString = randomNumber.toString(16);

console.log(`#${hexString}`);
