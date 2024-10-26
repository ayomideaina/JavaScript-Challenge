// JSON means JavaScript Object Notation
// In converting JSON to JavaScript Object use 
/* 
JSON.parse(json[, reviver])
json or text , the data
reviver is an optional callback function
when not using reviver, use this; JSON.parse(json, (key, value) => {

})
*/
// Task 1:
const skills = ['HTML', 'CSS', 'JS', 'Python']
let age = 20;
let isMarried = false
const student = {
  firstName:'Ayomide',
  lastName:'Aina',
  age:20,
  isMarried:true,
  occupation: 'web developer',
  skills:['HTML', 'CSS', 'JS', 'Python', ]
}
// Change skills array to JSON using JSON.stringify()
const txt = JSON.stringify(skills, undefined, 4);
console.log(txt);
// Stringify the age variable
const ageJ = JSON.stringify(age);
console.log(ageJ);

// Stringify the students object with only firstName, lastName and skills properties
const studentToTxt = JSON.stringify(student,['firstName', 'lastName', 'skills'],3);
console.log(studentToTxt);

// Task 2:
const userInfo = `{
    "Ade": {
        "email": "ade@g.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 30,
        "isLoggedIn": false,
        "points": 20
    },
    "loveth": {
        "email": "love@veth.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": true,
        "points": 50
    },
    "Boss": {
        "email": "d@boss.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 24,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@d.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Jux": {
        "email": "jux@j.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@t.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Precious": {
        "email": "precious@p.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Parse the userInfo JSON to object
const userObj = JSON.parse(userInfo,undefined, 4);
console.log(userObj);
