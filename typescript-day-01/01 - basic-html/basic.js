// create 3 variable  button, input1 , input2
// use getElementById method to store the "btn", "number1", "number2"

// Add eventlistner to button that will just do call a function handleClick.

// make a function called addNumbers that takes two parameters (num1, num2)

// the function addNumbers should return num1+num2

// inside function handleClick call the addNumbers function and console log the result comingback from addNumbers

let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');
const button = document.getElementById('btn');

button.addEventListener('click', handleClick);

function addNumbers(num1, num2) {
  return Number(num1) + Number(num2);
  //return +num1 + +num2;
}

function handleClick() {
  console.log(addNumbers(input1.value, input2.value));
}
