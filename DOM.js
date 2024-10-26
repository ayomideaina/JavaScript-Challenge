// Document Object Model
// It is possible to get, create, append or remove HTML elements using JavaScript
// To select an HTML element, we use tag name, id, class name or other attributes.
// getElementsByTagName
const headingOne = document.getElementsByTagName('h1');
console.log(headingOne);
console.log(headingOne.length);

const allTitles = document.getElementsByClassName('title');
console.log(allTitles);

let title = document.getElementById('firsttitle');
console.log(title);

// Exercise 1: Create an index.html file and put four p elements as above: 
// 1. Get the first paragraph by using document.querySelector(tagname) and tag name
const firstParagraph = document.querySelector('p');
console.log(firstParagraph);

// 2. Get each paragraph using document.querySelector('#id') and by their id
const secondParagraph = document.querySelector('#second-paragraph');
console.log( secondParagraph);

const thirdParagraph = document.querySelector('#third-paragraph');
console.log(thirdParagraph);

const fourthParagraph = document.querySelector('#fourth-paragraph');
console.log(fourthParagraph);

// 3. Get all the <p> elements as a nodeList using document.querySelectorAll(tagname)
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
for (let i = 0; i < paragraphs.length; i++) {
    console.log(paragraphs[i]);
}

// Exercise 2: Select all paragraphs and loop through each elements and give the first and 
// third paragraph a color of green, and the second and the fourth paragraph a red color
paragraphs.forEach((paragraph, i) => {
    if (i % 2 === 0) {
        paragraph.style.color = 'red'
      } else {
        paragraph.style.color = 'green'
      }
});
