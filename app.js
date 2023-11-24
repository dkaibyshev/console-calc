let num1 = parseInt(prompt("Введи первое число: "))
let action = prompt("Введи знак действия: ")
let num2 = parseInt(prompt("Введи второе число: "))

if (action == '+') {
console.log(num1 + num2)
}

else if (action == '-') {
  console.log(num1 - num2)
}

else if (action == '/') {
console.log(num1 / num2)
}

else if (action == '*') {
console.log(num1 * num2)
}