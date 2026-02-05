MathLang – A Tiny Word-Based Programming Language
Overview

MathLang is a simple experimental programming language that performs basic arithmetic operations using natural language expressions such as:

add five and four
divide twenty and four

The project demonstrates how a tiny language can be designed, parsed, and executed using JavaScript. It also documents how AI was used to assist in designing grammar rules and an interpreter.

This project was developed as part of the SCO306 – Programming Languages AI Assignment.

Features

MathLang supports:

Word-based arithmetic operations:

add

subtract

multiply

divide

Numbers written as words (zero to twenty)

Mixed input:

add 5 and four

Error handling:

Invalid numbers

Invalid operations

Project Structure
/MathLang
│
├── index.html          # Visual landing page
├── WordCalculator.js   # Main language interpreter
└── README.md           # Project documentation
How the Language Works
Grammar (BNF Format)

The AI generated the following grammar rules:

<expression> ::= <operation> <number> "and" <number>
<operation> ::= "add" | "subtract" | "multiply" | "divide"
<number> ::= "zero" | "one" | ... | "twenty"


This means every valid MathLang command must follow:

operation + number + "and" + number

Example:
add four and five
Part 1 – Basic Interpreter

The first implementation uses simple string parsing and a lookup table:

execute("add five and four") // returns 9


It works by:

Splitting the sentence into words.

Mapping word numbers to real numbers.

Applying the correct arithmetic operation.

Part 2 – AI-Assisted Interpreter
Part 2 – AI-Assisted Interpreter

The second implementation uses a class-based design:

const calculator = new WordCalculator();
calculator.execute("add four and five"); // returns "nine"


This version:

Converts word results back into words.

Uses object mappings (wordToNum, numToWord).

Handles errors more cleanly.
Running the Project
Option 1 – In Browser

Open index.html

Open browser console (F12)

View output logs

Option 2 – In Node.js
node WordCalculator.js

Example Output
/////////////// MATH LANG ////////////////
add five and four = 9
subtract five and four = 1
multiply five and four = 20
divide twenty and four = 5
divide five and zero = Cannot divide by zero
add 5 and four = 9

//////////////// AI RESPONSE /////////////////
add four and five = nine
subtract four and five = one
multiply four and five = twenty
divide twenty and four = five
divide four and zero = Cannot divide by zero

What I Learned

Programming languages are based on grammar + interpretation.

Even simple languages require:

Tokenization

Parsing

Semantic rules

AI is useful for:

Generating ideas

Drafting logic
But still requires human debugging and design decisions.
Future Improvements

Support larger numbers (e.g. thirty, forty, hundred).

Add parentheses and chaining:

add five and multiply three and two


Add a real input field on the webpage.

Build a full parser instead of simple string splitting.

License

This project is for educational purposes only.
Free to use, modify, and extend.

Author

SCO306 – Programming Languages
AI Assisted Language Design Assignment
@MousaCode
2026

Division by zero
