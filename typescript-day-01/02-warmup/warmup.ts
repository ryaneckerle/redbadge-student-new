let input1 = document.getElementById("number1") as HTMLInputElement;
let input2 =<HTMLInputElement>document.getElementById("number2");

let button = document.getElementById("btn");

button.addEventListener("click", () => {
  console.log(addNumbers(Number(input1.value), Number(input2.value)));
});

function addNumbers(num1: number, num2: number) {
  return Number(num1) + Number(num2);
}