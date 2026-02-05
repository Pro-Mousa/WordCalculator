<!-- ===================== HEADER BANNER ===================== -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=200&color=0:4facfe,100:00f2fe&section=header&text=MathLang&fontSize=55&fontColor=ffffff&desc=Tiny%20Word-Based%20Programming%20Language&descSize=22&descAlignY=65" />
</p>

<p align="center">
  <b>🧠 A Tiny Programming Language Powered by Words</b><br>
  <i>"Because code doesn't always need symbols."</i>
</p>

---

<h2 style="color:#4facfe;">📘 Overview</h2>

<p>
<b>MathLang</b> is a simple experimental programming language that performs basic arithmetic
operations using natural language expressions such as:
</p>

<pre>
add five and four  
divide twenty and four
</pre>

<p>
The project demonstrates how a tiny language can be designed, parsed, and executed using JavaScript.
It also documents how AI was used to assist in designing grammar rules and an interpreter.
</p>

<p>
This project was developed as part of the <b>SCO306 – Programming Languages AI Assignment</b>.
</p>

---

<h2 style="color:#00f2fe;">✨ Features</h2>

<h3>Word-based arithmetic operations</h3>
<ul>
  <li>add</li>
  <li>subtract</li>
  <li>multiply</li>
  <li>divide</li>
</ul>

<h3>Numbers written as words</h3>
<ul>
  <li>zero to twenty</li>
</ul>

<h3>Mixed input</h3>
<pre>
add 5 and four
</pre>

<h3>Error handling</h3>
<ul>
  <li>Invalid numbers</li>
  <li>Invalid operations</li>
  <li>Division by zero</li>
</ul>

---

<h2 style="color:#38bdf8;">📂 Project Structure</h2>

<pre>
/MathLang
│
├── index.html          # Visual landing page
├── WordCalculator.js   # Main language interpreter
└── README.md           # Project documentation
</pre>

---

<h2 style="color:#a78bfa;">📐 Grammar (BNF)</h2>

<pre>
&lt;expression&gt; ::= &lt;operation&gt; &lt;number&gt; "and" &lt;number&gt;
&lt;operation&gt; ::= "add" | "subtract" | "multiply" | "divide"
&lt;number&gt; ::= "zero" | "one" | ... | "twenty"
</pre>

<p>Example:</p>
<pre>
add four and five
</pre>

---

<h2 style="color:#facc15;">🧩 Part 1 – Basic Interpreter</h2>

<pre>
execute("add five and four"); // returns 9
</pre>

<p><b>How it works:</b></p>
<ul>
  <li>Splits the sentence into words</li>
  <li>Maps word numbers to integers</li>
  <li>Applies the arithmetic operation</li>
</ul>

---

<h2 style="color:#fb923c;">🤖 Part 2 – AI-Assisted Interpreter</h2>

<pre>
const calculator = new WordCalculator();
calculator.execute("add four and five"); // returns "nine"
</pre>

<ul>
  <li>Converts numeric results back into words</li>
  <li>Uses object mappings (wordToNum, numToWord)</li>
  <li>Improved validation and error handling</li>
</ul>

---

<h2 style="color:#4ade80;">▶️ Running the Project</h2>

<h3>In Browser</h3>
<ol>
  <li>Open index.html</li>
  <li>Press F12</li>
  <li>View console output</li>
</ol>

<h3>In Node.js</h3>
<pre>
node WordCalculator.js
</pre>

---

<h2 style="color:#22d3ee;">📊 Example Output</h2>

<pre>
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
</pre>

---

<h2 style="color:#c084fc;">🎓 What I Learned</h2>

<ul>
  <li>Programming languages are built on grammar and interpretation</li>
  <li>Even simple languages require tokenization, parsing and semantics</li>
  <li>AI is useful for idea generation but humans still design and debug</li>
</ul>

---

<h2 style="color:#f472b6;">🚀 Future Improvements</h2>

<ul>
  <li>Support larger numbers (thirty, forty, hundred)</li>
  <li>Add expression chaining</li>
  <li>Add real input field on webpage</li>
  <li>Build a real parser</li>
</ul>

<pre>
add five and multiply three and two
</pre>

---

<h2 style="color:#10b981;">📜 License</h2>

<p>
Educational use only.<br>
Free to modify and extend.
</p>

---

<h2 style="color:#60a5fa;">👤 Author</h2>

<p>
<b>SCO306 – Programming Languages</b><br>
AI Assisted Language Design Assignment<br>
<b>@MousaCode</b><br>
2026
</p>

<!-- ===================== FOOTER ===================== -->
<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&height=100&color=0:4facfe,100:00f2fe&section=footer" />
</p>
