// Web Stoorages
// Storing an array in a localStorage. If we are storing an array, an object or object array, 
// we should stringify the object first. See the example below.
let skills = [
    { tech: 'HTML', level: 10 },
    { tech: 'CSS', level: 9 },
    { tech: 'JS', level: 8 },
    { tech: 'React', level: 9 },
    { tech: 'Redux', level: 10 },
    { tech: 'Node', level: 8 },
    { tech: 'MongoDB', level: 8 }
  ]
  
  let skillJSON = JSON.stringify(skills);
  localStorage.setItem('skills', skillJSON);
  console.log(localStorage);
  
  const user = {
    firstName: 'Ayomide',
    age: 20,
    country:'South Korea',
    skills: ['HTML', 'CSS', 'JS', 'React']  
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText);

//   We get data from the local storage using localStorage.getItem() method.
// let firstName = localStorage.getItem('firstName')
// let age = localStorage.getItem('age')
let User = localStorage.getItem('user');
console.log(User);

let UserObj = JSON.parse(User, undefined, 4);
console.log(UserObj);