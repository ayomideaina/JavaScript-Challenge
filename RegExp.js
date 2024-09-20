// Regular Expression
// A RegExp can be used to check if some pattern exists in a different data types
// A regular expression takes two parameters. One required search pattern and an optional flag.

/* flags: are optional parameters in a regular expression which determine the type of searching.
could be g, i, m, s, u or y
g: a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline
*/

// Declaring regular expression without global flag and case insensitive flag.

// without flag
// let pattern = 'love'
// let regEx = new RegExp(pattern);

// Declaring regular expression with global flag and case insensitive flag.
// let Pattern = 'love'
// let flag = 'gi'
// let RegEx = new RegExp(Pattern, flag);
// RegExp is a constructor

// Writing the pattern and the flag inside the RegExp constructor
// regEx = new RegExp('love','gi');

// Creating a pattern without RegExp Constructor
// regEx= /love/gi  // this regular expression is the same as the one which was created with RegExp constructor
// RegExpp Object Methods
// 1. test():Tests for a match in a string. It returns true or false.
const str = 'I love JavaScript'
const pattern = /love/   // The regular expression /love/ is used to search for the word "love" in the string.
const result = pattern.test(str)
console.log(result);  // true

//2. match():Returns an array containing all of the matches or null if no match is found.
const Result = str.match(pattern)
console.log(Result);

/* const str = 'I love JavaScript'
const pattern = /love/g
const result = str.match(pattern)
console.log(result);
The g flag at the end stands for global, meaning it will search the entire string for 
all occurrences of the word "love" rather than stopping after the first match.
*/

// 3. search(): Tests for a match in a string. It returns the index of the match, or -1 if the search fails.
const resulT = str.search(pattern)
console.log(resulT);

// 4. replace(): Executes a search for a match in a string, and replaces the matched substring with a 
// replacement substring.
const txt = 'Python is the most beautiful language that a human begin has ever created.\
I recommend python for a first programming language'

matchReplaced = txt.replace(/Python|python/, 'JavaScript')
console.log(matchReplaced);
/*The replace() method is called on the txt string. It takes two arguments: The first argument is a 
regular expression /Python|python/, which looks for either Python or python (case-sensitive).
The second argument is 'JavaScript', which will replace the found matches. The replace() method, 
when used without the global flag (g), only replaces the first occurrence of the matched substring. 
to replace all occurrences of "Python" and "python", you should use the global flag (g)
matchReplaced = txt.replace(/Python|python/g, 'JavaScript');
/Python/gi: This version handles all possible capitalizations of the word "Python" because it is 
case-insensitive (i flag). It will match "Python," "python," "PYTHON," "PyThOn," etc.
/Python|python/g: This version is case-sensitive and will only match "Python" and "python." It will not 
match other variations like "PYTHON" or "PyThOn."
*/

const tx = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = tx.replace(/%/g, '')
console.log(matches);  

/*
Square Bracket is used to include lower and upper case
const pattern = '[Aa]pple' // this square bracket means either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the  
doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(pattern)

console.log(matches)  
*/
// Escape character(\) in RegExp
const patterN = /\d/g  // d is a special character which means digits
const Txt = 'This regular expression example was made in January 12,  2020.'
const Matches = Txt. match(patterN)

console.log(Matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
