// Console Object Methods
console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
console.log(
  '%c30 Days%c %cOf%c %cJavaScript%c',
  'color:green',
  '',
  'color:red',
  '',
  'color:yellow'
) // log output green red and yellow text
console.warn('This is a warning');
console.warn(
  'You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!'
);
console.warn('Warning is different from error');

console.error('This is an error message');
console.error('We all make mistakes');

// the console.table() takes one required argument data, which must be an array or an object, and one additional optional parameter columns.
const names = ['Ayomide', 'Love', 'Princess', 'Ella']
console.table(names);

const user = {
    name: 'Ayomide',
    title: 'Programmer',
    country: 'Nigeria',
    city: 'Lagos',
    age:20
  }
  console.table(user);

const users = [
    {
      name: 'Rejoice',
      title: 'Programmer',
      country: 'Finland',
      city: 'Helsinki',
      age: 18
    },
    {
      name: 'Ade',
      title: 'Teacher',
      country: 'Ghana',
      city: 'Accra',
      age: 25
    },
    {
      name: 'Joy',
      title: 'Instructor',
      country: 'South Korea',
      city: 'Seoul',
      age: 22
    },
    {
      name: 'Loveth',
      title: 'Developer',
      country: 'Nigeria',
      city: 'Abuja',
      age: 28
    }
  ]
console.table(users);
console.group('users');
console.log(users);
console.groupEnd();


console.info('30 Days Of JavaScript challenge is trending on Github');
console.info('30 Days Of fullStack challenge might be released');
console.info('30 Days Of HTML and CSS challenge might be released');

console.assert(4 > 3, '4 is greater than 3') // no result
console.assert(3 > 4, '3 is not greater than 4') // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`
  console.log('the # is ' + i)
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
}

console.assert(10 > 2 * 10, '10 is not greater than 2 times 10');

const countries = [
    ['Nigeria', 'Lagos'],
    ['Korea', 'Seoul'],
    ['Norway', 'Oslo'],
    ['Japan', 'Tokyo']
  ]
  
  console.time('Regular for loop');
  for (let i = 0; i < countries.length; i++) {
    console.log(countries[i][0], countries[i][1]);
  }
  console.timeEnd('Regular for loop');

  
  console.time('for of loop');
  for (const [name, city] of countries) {
    console.log(name, city);
  }
  console.timeEnd('for of loop');
  
  console.time('forEach loop');
  countries.forEach(([name, city]) => {
    console.log(name, city);
  })
  console.timeEnd('forEach loop');