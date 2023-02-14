let result = document.getElementById("result");
let span = document.createElement("span");
let root = document.getElementById("root");
let number1 = 0;
let number2 = 0;
let operator = null;
let calculator = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  ".",
  "+",
  "-",
  "*",
  "/",
  "=",
  "C",
];

for (i = 0; i < calculator.length; i++) {
  let numbers = document.createElement("button");
  numbers.innerHTML = calculator[i];
  numbers.setAttribute("id", calculator[i]);
  span.appendChild(numbers);
  root.appendChild(span);
  numbers.addEventListener("click", function (event) {
    let input = event.target.innerHTML;
    console.log(input);
    if (isNaN(input)) {
      if (input === "=") {
        if (number2 !== 0) {
          console.log(eval(number1 + operator + number2));
          result.innerHTML = eval(number1 + operator + number2);
          number1 = result.innerHTML;
          number2 = 0;
          operator = null;
        }
      } else if (input === "C") {
        result.innerHTML = 0;
        number1 = 0;
        number2 = 0;
        operator = null;
      } else {
        operator = input;
      }
    } else {
      if (operator === null) {
        number1 = number1 * 10 + parseFloat(input);
        result.innerHTML = number1;
      } else {
        number2 = number2 * 10 + parseFloat(input);
        result.innerHTML = number2;
      }
    }
  });
}
