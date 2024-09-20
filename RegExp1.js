//exercise 1: Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
function cleanText(text) {
    return text.replace(/[%$@&#;!?]/g, '');
  }
  
  const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
  const newText =cleanText(sentence);
console.log(newText);
  
function mostFrequentWords(text) {
    const words = text.split(' ');
    const wordCount = {};
  
    // Count the frequency of each word
    words.forEach(word => {
      word = word.toLowerCase(); // Make case-insensitive
      wordCount[word] = (wordCount[word] || 0) + 1;
    });
  
    // Convert the wordCount object to an array of objects and sort by count
    const sortedWordCount = Object.keys(wordCount)
      .map(word => ({ word, count: wordCount[word] }))
      .sort((a, b) => b.count - a.count);
    return sortedWordCount.slice(0, 3);
  }
  
console.log(mostFrequentWords(newText));

// exercise 2:Calculate the total annual income of the person from the following text
const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';

// Use a regular expression to extract all the numbers from the text
const numbers = text.match(/\d+/g);

// Convert the extracted numbers from strings to numbers
const salaryPerMonth = parseInt(numbers[0]);  // 4000
const annualBonus = parseInt(numbers[1]);     // 10000
const onlineCoursesPerMonth = parseInt(numbers[2]);  // 5500

// to calculate the total annual income
const totalAnnualIncome = (salaryPerMonth * 12) + annualBonus + (onlineCoursesPerMonth * 12);

console.log(`Total annual income: ${totalAnnualIncome} euros`);
