// Classes
// Creating an object from a class is called class instantiation.
class Person {
    constructor(firstName, lastName) {
      console.log(this) // Check the output from here
      this.firstName = firstName
      this.lastName = lastName
    }
  }
  
  const person = new Person('Ayomide', 'Aina');
  console.log(person);
  
  class PersonOne {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
        return this.score
      }
      get getSkills() {
        return this.skills
      }
      set setScore(score) {
        this.score += score
      }
      set setSkill(skill) {
        this.skills.push(skill)
      }
      getPersonInfo() {
        let fullName = this.getFullName()
        let skills =
          this.skills.length > 0 &&
          this.skills.slice(0, this.skills.length - 1).join(', ') +
            ` and ${this.skills[this.skills.length - 1]}`
        let formattedSkills = skills ? `Her skills are ${skills}` : ''
    
        let info = `${fullName} is ${this.age} years old. She lives ${this.city}, ${this.country}. ${formattedSkills}`
        return info
      }
  }
  
  const person1 = new PersonOne('Ayomide', 'Aina', 20, 'SouthKorea', 'Seoul')
  const person2 = new PersonOne('Pelumi', 'Aina', 15, 'Nigeria', 'Abuja')
  
  console.log(person1.getFullName());
  console.log(person2.getFullName());

person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Writing'
person2.setSkill = 'Managing'
person2.setSkill = 'Teaching'

console.log(person1.score);
console.log(person2.score);

console.log(person1.skills);
console.log(person2.skills);

console.log(person1.getPersonInfo());
console.log(person2.getPersonInfo());

//get method:Instead of accessing properties directly from the object we use getter to get the value
/* 
this.score = 0
this.skills = []
get getScore() {
    return this.score
  }
  get getSkills() {
    return this.skills
  }
console.log(person1.getScore) // We do not need parenthesis to call a getter method
console.log(person2.getScore)

console.log(person1.getSkills);
console.log(person2.getSkills);
*/

// The setter method allow us to modify the value of certain properties
/* 
set setScore(score) {
    this.score += score
  }
  set setSkill(skill) {
    this.skills.push(skill)
  }
*/

/* 
Using inheritance we can access all the properties and the methods of the parent class. This reduces repetition of code.

*/

class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
    AnimalInfo() {
      return `${this.name} is a ${this.color} animal, ${this.age} years old, and has ${this.legs} legs.`;
    }
    sound() {
      return `${this.name} makes a sound.`;
    }
  }
  class Dog extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs); // Call the parent constructor
    }

    // Override the sound method
    sound() {
      return `${this.name} barks!`;
    }
  }
  
  class Cat extends Animal {
    constructor(name, age, color, legs) {
      super(name, age, color, legs);
    }
    sound() {
      return `${this.name} meows!`;
    }
  }

const dog = new Dog('Biggy', 4, 'brown');
const cat = new Cat('Whiskers', 2, 'black');

console.log(dog.sound());
console.log(cat.sound());

console.log(dog.AnimalInfo());
console.log(cat.AnimalInfo());

/*
Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome,
totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/
class PersonAccount {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.incomes = [];
      this.expenses = [];
    }
  
    addIncome(amount, description) {
      this.incomes.push({ amount, description });
    }
  
    addExpense(amount, description) {
      this.expenses.push({ amount, description });
    }
  
    totalIncome() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    }
  
    //to calculate total expense
    totalExpense() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }
  
    //to get account balance
    accountBalance() {
      return this.totalIncome() - this.totalExpense();
    }
  
    //to get account information
    accountInfo() {
      return `${this.firstName} ${this.lastName} has a 
      total income of ${this.totalIncome()} and 
      total expenses of ${this.totalExpense()}. 
      Current balance: ${this.accountBalance()}`;
    }
  }
const personAccount = new PersonAccount('Loveth', 'Martins');

personAccount.addIncome(5000, 'Salary');
personAccount.addIncome(2000, 'Freelance Work');

personAccount.addExpense(1500, 'Rent');
personAccount.addExpense(300, 'Groceries');

console.log(personAccount.accountInfo()); 

  