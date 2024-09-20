// Destructuring and Spread
const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

console.log(e,pi,gravity, bodyTemp, boilingTemp);

//default value is used in case the value of array for that index is undefined: 
const names = [undefined, 'Love', 'Grace']
let [
  firstPerson = 'Peace',
  secondPerson,
  thirdPerson,
  fourthPerson = 'Altar'
] = names

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// Destructuring Object

// Object parameter Without destructuring
const rect = {
    width: 20,
    height: 10
  }
  const calculatePerimeter = rectangle => {
    return 2 * (rectangle.width + rectangle.height)
  }
  
  console.log(calculatePerimeter(rect));

const person = {
    firstName: 'Ayomide',
    lastName: 'Aina',
    age: 19,
    country: 'Nigeria',
    job: 'Developerr and Enterpreneur',
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
      'Python'
    ],
    languages: ['English', 'Yoruba']
  }
  // Let us create a function which give information about the person object without destructuring
  
  const getPersonInfo = obj => {
    const skills = obj.skills
    const formattedSkills = skills.slice(0, -1).join(', ')
    const languages = obj.languages
    const formattedLanguages = languages.slice(0, -1).join(', ')
  
    personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. She is  ${
      obj.age
    } years old. She is an ${obj.job}.  She teaches ${formattedSkills} and ${
      skills[skills.length - 1]
    }.  She speaks ${formattedLanguages} and a little bit of ${languages[1]}.`
  
    return personInfo
  }
  
  console.log(getPersonInfo(person));

// exercise
const todoList = [
    {
      task:'Study JS',
      time:'13/09/2024 10:30',
      completed:true
    },
    {
      task:'Complete CSS tasks',
      time:'12/09/2024 08:00',
      completed:false
    },
    {
      task:'Study a course on technical writing',
      time:'13/09/2024 4:00',
      completed:false
    }
    ]
    
    for (const {task, time, completed} of todoList){
      console.log(task, time, completed)
    }

    // Destructure the countries object print name, capital, population and languages of all countries
    const countries = [
      {
        name: 'Finland',
        capital: 'Helsinki',
        population: 5518000,
        languages: ['Finnish', 'Swedish']
      },
      {
        name: 'Sweden',
        capital: 'Stockholm',
        population: 10350000,
        languages: ['Swedish']
      },
      {
        name: 'Norway',
        capital: 'Oslo',
        population: 5379000,
        languages: ['Norwegian']
      }
    ];

    countries.forEach(({ name, capital, population, languages }) => {
      console.log(`Country: ${name}`);
      console.log(`Capital: ${capital}`);
      console.log(`Population: ${population}`);
      console.log(`Languages: ${languages.join(', ')}`);
      console.log('-------------------------');
    });

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];

// Destructuring the array in one line
const [name, skills, [, , jsScore, reactScore]] = student;

console.log(name, skills, jsScore, reactScore);

// another task
function convertArrayToObject(arr) {
  return arr.map(([name, skills, scores]) => ({
      name,
      skills,
      scores
  }));
}

const students = [
  ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
  ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
];

console.log(convertArrayToObject(students));

//Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets 
let studentDetails= {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 }
    ],
    dataBase: [
      { skill: 'MongoDB', level: 7.5 }
    ],
    dataScience: ['Python', 'R', 'D3.js']
  }
};

// Create a new object by copying the student object without mutating the original
const newStudent = {
  ...studentDetails,
  skills: {
    ...studentDetails.skills,
    frontEnd: [...studentDetails.skills.frontEnd, { skill: 'Bootstrap', level: 8 }],
    backEnd: [...studentDetails.skills.backEnd, { skill: 'Express', level: 9 }],
    dataBase: [...studentDetails.skills.dataBase, { skill: 'SQL', level: 8 }],
    dataScience: [...studentDetails.skills.dataScience, 'SQL']
  }
};

console.log(newStudent);
