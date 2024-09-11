// Expression Function
const square = function(n) {
    return n * n
  }
  
 console.log(square(2));

// Unlimited number of parameters in regular function
function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
}

console.log(sumAllNums(1, 2, 3, 4));
console.log(sumAllNums(10, 20, 13, 40, 10));
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40));

// Function with default parameters
function greetings(name = 'Mercy') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
 }
console.log(greetings());
console.log(greetings('Ayomide'));

    // To calculate the perimeter of a rectangle
function perimeterOfRectangle(length, width) {
    let perimeter = 2 * (length + width);
    return perimeter;
}
console.log('Perimeter: ', perimeterOfRectangle(14, 30));

// function to calculate speed
function calculateSpeed(distance, time){
    let speed = distance / time;
    return speed
}
console.log('speed: ', calculateSpeed(500, 60))

// function name showDateTime which shows time using the Date object.
function showDateTime() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0'); 
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
  
    console.log(formattedDateTime);
  }
  
showDateTime();

// A function that reverses an array without using built-in methods
function reverseArray(arr) {
    const reversed = [];
    
    for (let i = arr.length - 1; i >= 0; i--) {
      reversed.push(arr[i]);
    }
    return reversed;
  }
  console.log(reverseArray([1, 2, 3, 4, 5]));
  console.log(reverseArray(['a', 'b', 'c']));
  
// function generateColors which can generate any number of hexa or rgb colors.
function generateColors(format, numOfColors) {
    const colors = [];
    for (let i = 0; i < numOfColors; i++) {
      if (format === 'hexa') {
        // Generate a random hexadecimal color
        const color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        colors.push(color);
      } else if (format === 'rgb') {
        // Generate a random RGB color
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        const color = `rgb(${r},${g},${b})`;
        colors.push(color);
      }
    }
  
    return numOfColors === 1 ? colors[0] : colors;
  }
  
  console.log(generateColors('hexa', 3)); 
  console.log(generateColors('hexa', 1)); 
  console.log(generateColors('rgb', 3));
  console.log(generateColors('rgb', 1));

// Call a function sum, it takes any number of arguments and it returns the sum.
  function sum(...args) {
    let sumAll = 0;
    for (let num of args) {
      sumAll += num;
    }
    return sumAll;
  }
  console.log(sum(5, 9, 16));
  console.log(sum(10, -2, 5, 3));
  console.log(sum(7));
  console.log(sum());