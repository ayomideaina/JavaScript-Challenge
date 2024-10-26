// const button = document.querySelector('button')
//       button.addEventListener('click', e => {
//         console.log('e gives the event listener object:', e)
//         console.log('thank you for checking this out', e.target);
//         console.log('e.target.textContent gives content of selected element: ',
//           e.target.textContent);
//       })

// // doubleclick: button.addEventListener('dblclick', e => {})
// // mouse enter: when the mouse point enter to the element
// // mouseover - when the mouse pointer move on the element
// // mouseout -when the mouse pointer out from the element


// const Button = document.querySelector('button')
//       button.addEventListener('mouseenter', e => {
//         console.log('e gives the event listener object:', e)
//         console.log('e.target gives the selected element: ', e.target)
//         console.log(
//           'e.target.textContent gives content of selected element: ',
//           e.target.textContent
//         )
//       })

    //   const mass = document.querySelector('#mass')
    //   const height = document.querySelector('#height')
    //   const buttoN = document.querySelector('button')

    //   let bmi
    //   buttoN.addEventListener('click', () => {
    //     bmi = mass.value / height.value ** 2
    //     alert(`your bmi is ${bmi.toFixed(2)}`)
    //     console.log(bmi)
    //   })
    // const input = document.querySelector('input')
    //   const p = document.querySelector('p')

    //   input.addEventListener('input', e => {
    //     p.textContent = e.target.value
    //   })

    // // keypress, keydow and keyup
    //   document.body.addEventListener('keypress', e => {
    //     alert(e.keyCode)
    //   })

// Number Generator
function isPrime(num) {
  if (num <= 1) return false; 
  if (num === 2) return true;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
  }
  return true;
}

function generateNumbers() {
  const container = document.getElementById('numberContainer'); 
  const input = document.getElementById('userInput').value; 
  const count = parseInt(input); 

  container.innerHTML = ''; 

  for (let i = 0; i <= count; i++) {
      const numbers = document.createElement('div'); 
      numbers.classList.add('number');
      numbers.textContent = i;

      if (isPrime(i)) {
          numbers.style.backgroundColor = '#e74c3c'; 
      } else if (i % 2 === 0) {
          numbers.style.backgroundColor = '#3498db'; 
      } else {
          numbers.style.backgroundColor = '#f1c40f';
      }

      container.appendChild(numbers); 
  }
}

// Generating the keyboard code code using event listener
const key = document.querySelector('#key')
const keyCode = document.querySelector('#keyCode')

document.addEventListener('keydown', e => {
    key.textContent = e.key;
    keyCode.textContent = e.keyCode;
})
