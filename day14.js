const prompt = require('prompt');

prompt.start();

const throwError = () => {
  let message; // will not be used in the function.
  prompt.get(['number'], function (err, result) {
    let x = result.number;

    try {
      if (x === '') throw 'empty'; 
      if (isNaN(x)) throw 'not a number';
      
      x = Number(x); // Convert the input `x` to a number type
      
      if (x < 5) throw 'too low'; 
      if (x > 10) throw 'too high';
    } 
    catch (err) {
      console.log(err);
    }
  });
};
throwError();

try {
    let lastName = 'Aina'
    let fullName = fistName + ' ' + lastName
  } catch (err) {
    console.log('Name of the error', err.name)
    console.log('Error message', err.message)
  } finally {
    console.log('In any case I will be executed')
  }

  // Import the prompt package
// const prompt = require('prompt');

// // Start the prompt
// prompt.start();

// Example: Get user input
prompt.get(['name', 'age'], function (err, result) {
  if (err) {
    return console.error(err);
  }
  // Log the result (user's input)
  console.log('Command-line input received:');
  console.log('Name:', result.name);
  console.log('Age:', result.age);
});
