// Part 1 : Create a Tiny Language
/*
 MathLang: the language is for simple calculations with words like "add three
 and five" 8 
 */

// prettier-ignore
const numberMap = {
  zero: 0,
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  eleven: 11,
  twelve: 12,
  thirteen: 13,
  fourteen: 14,
  fifteen: 15,
  sixteen: 16,
  seventeen: 17,
  eighteen: 18,
  nineteen: 19,
  twenty: 20,
};

function toNumber(value) {
  return isNaN(value) ? numberMap[value] : Number(value);
}

function execute(command) {
  const parts = command.toLowerCase().trim().split(/\s+/);
  const op = parts[0];
  const a = toNumber(parts[1]);
  const b = toNumber(parts[3]);

  if (a === undefined || b === undefined) {
    return 'Invalid numbers';
  }

  if (op === 'divide' && b === 0) {
    return 'Cannot divide by zero';
  }

  switch (op) {
    case 'add':
      return a + b;
    case 'subtract':
      return a - b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      return 'Unknown operation';
  }
}

console.log('           ');
console.log('/////////////// MATH LANG ////////////////');
console.log('add five and four =', execute('add five and four'));
console.log('subtract five and four =', execute('subtract five and four'));
console.log('multiply five and four =', execute('multiply five and four'));
console.log('divide twenty and four =', execute('divide twenty and four'));
console.log('divide five and zero =', execute('divide five and zero'));
console.log('add 5 and four =', execute('add 5 and four'));

// Part 2 : Build with AI Help

/*
1. Ask the AI for grammar rules
Example prompt: "Give me 5 grammar rules for simple calculations
with words in BNF format"
'''

''' 
BNF Grammar Rules for Word Calculations:

1. <expression> ::= <operation> <number> "and" <number>
                  | <number>

2. <operation> ::= "add" | "subtract" | "multiply" | "divide"

3. <number> ::= "zero" | "one" | "two" | "three" | "four" | "five"
                    | "six" | "seven" | "eight" | "nine" | "ten"

4. <result> ::= <number>

5. <calculation> ::= <expression> "to give" <result>
*/

/*
2. Ask the AI for code to interpret/run your language
Example prompt: "Write JavaScript code that can parse and execute “
add four and five' to give 'nine'"
*/

// prettier-ignore
class WordCalculator {
  constructor() {
    this.wordToNum = {
      zero: 0,
      one: 1,
      two: 2,
      three: 3,
      four: 4,
      five: 5,
      six: 6,
      seven: 7,
      eight: 8,
      nine: 9,
      ten: 10,
      eleven: 11,
      twelve: 12,
      thirteen: 13,
      fourteen: 14,
      fifteen: 15,
      sixteen: 16,
      seventeen: 17,
      eighteen: 18,
      nineteen: 19,
      twenty: 20,
    };
    this.numToWord = {};
    for (const [word, num] of Object.entries(this.wordToNum)) {
      this.numToWord[num] = word;
    }
  }

  execute(text) {
    const words = text.toLowerCase().split(' ');

    if (words.length < 4) {
      return 'Invalid expression';
    }

    const operation = words[0];
    const num1Word = words[1];
    const num2Word = words[3]; // Skip "and"

    const validOperations = ['add', 'subtract', 'multiply', 'divide'];
    if (!validOperations.includes(operation)) {
      return 'Invalid operation';
    }

    if (!(num1Word in this.wordToNum) || !(num2Word in this.wordToNum)) {
      return 'Invalid number word';
    }

    const num1 = this.wordToNum[num1Word];
    const num2 = this.wordToNum[num2Word];
    let result;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 === 0) {
          return 'Cannot divide by zero';
        }
        result = num1 / num2;
        break;
      default:
        throw new Error('Unknown operation');
    }

    // Check if result is an integer
    if (Number.isInteger(result) && result in this.numToWord) {
      return this.numToWord[result];
    } else {
      return result.toString();
    }
  }
}

// Example usage
const calculator = new WordCalculator();
// const result = calculator.execute('add four and five');
// console.log(`add four and five: ${result}`);

console.log('           ');

console.log('////////////////   AI RESPONSE /////////////////');
console.log(`add four and five = `, calculator.execute('add five and four'));

console.log(
  `subtract four and five = `,
  calculator.execute('subtract five and four')
);
console.log(
  `multiply four and five = `,
  calculator.execute('multiply five and four')
);
console.log(
  `divide twenty and four = `,
  calculator.execute('divide twenty and four')
);
console.log(
  `divide four and zero = `,
  calculator.execute('divide five and zero')
);

// Export for use in browser or Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = WordCalculator;
}
