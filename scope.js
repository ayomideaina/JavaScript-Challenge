// Scope
let a = 'JavaScript';
let b = 10 
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    let a = 'Python';
    let b = 100;
    console.log(a, b);
  }
  console.log(a, b);
}
letsLearnScope()
console.log(a, b);

// Object Methods
const person = {
  firstName: 'Ayomide',
  age: 18,
  country: 'Nigeria',
  city:'Lagos',
  skills: ['HTML', 'CSS', 'JS'],
  title: 'Freelancer',
  address: {
    street: 'Love 16',
    pobox: 106,
    city: 'Lagos'
  },
  getPersonInfo: function() {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
  }
}

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person)
console.log(copyPerson)

// exercises
// Create an empty object called dog
let dog = {};

console.log(dog);

//add dog's properties
dog.name = "Bingo";
dog.legs = 4;
dog.color = "black";
dog.age = 2;
dog.bark = function() {
  return "woof woof";
};

console.log("Name:", dog.name);     
console.log("Legs:", dog.legs); 
console.log("Color:", dog.color);
console.log("Age:", dog.age);
console.log("Bark:", dog.bark());

// dog's new properties
dog.breed = "germanSherpherd";
dog.getDogInfo = function() {
  return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}, Breed: ${this.breed}`;
};
console.log(dog);

console.log("Breed:", dog.breed);     
console.log("Dog Info:", dog.getDogInfo());


// exercise 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  };
  
  // the person who has many skills in the users object.
  let personWithMostSkills = null;
  let maxSkillsCount = 0;
  
  for (const user in users) {
    const skillsCount = users[user].skills.length;
    if (skillsCount > maxSkillsCount) {
      maxSkillsCount = skillsCount;
      personWithMostSkills = user;
    }
  }
  
  console.log(`Person with highest skill count: ${personWithMostSkills} has ${maxSkillsCount} skills`);
  
  // 
  let loggedInCount = 0;
  let highPointsCount = 0;
  
  for (const user in users) {
    if (users[user].isLoggedIn) {
      loggedInCount++;
    }
    if (users[user].points >= 50) {
      highPointsCount++;
    }
  }
  
  console.log(`Number of logged-in users: ${loggedInCount}`);
  console.log(`Number of users with points >= 50: ${highPointsCount}`);

//3: Set your name in the users object without modifying the original users object
const anotherUser = {
    Joy: { 
      email: 'joy@gmail.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 45
    }
  }
  const updatedUsers = Object.assign({}, users, anotherUser)
  console.log(updatedUsers);