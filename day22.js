// Manipulating DOM
// Creating an Element :To create an HTML element we use tag name.
// To create multiple elements, use loop. Using loop we can create as many HTML elements as we want.
let title
    for (let i = 0; i < 3; i++) {
        title = document.createElement('h1')
        title.className = 'title'
        title.style.fontSize = '24px'
        title.textContent = i
        console.log(title);
    }

// The document.body support the appendChild() method.
// After creating an HTML, to remove element or elements, use the removeChild() method.

const ul = document.querySelector('ul')
    const lists = document.querySelectorAll('li')
    for (const list of lists) {
        ul.removeChild(list)
    }
// Exercise:
const container = document.getElementById('numberContainer');
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
for (let i = 0; i <= 100; i++) {
  const numbers = document.createElement('div');
  numbers.classList.add('number');
  numbers.textContent = i;
 
  if (isPrime(i)) {
        numbers.style.backgroundColor ='red';
    } else if (i % 2 === 0) {
        numbers.style.backgroundColor ='blue';
    } else {
        numbers.style.backgroundColor ='yellow';
    }
    container.appendChild(numbers);  
}