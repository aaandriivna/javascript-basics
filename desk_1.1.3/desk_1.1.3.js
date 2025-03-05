// Запитуємо у користувача два числа
let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");

// Перетворюємо введені значення у числа
num1 = parseFloat(num1);
num2 = parseFloat(num2);

// Перевіряємо, чи введені дані є числами
if (isNaN(num1) || isNaN(num2)) {
    alert("Будь ласка, введіть коректні числа!");
} else {
    // Запитуємо математичну операцію
    let operator = prompt("Введіть операцію (+, -, *, /):");

    // Виконуємо відповідну операцію
    let result;
    if (operator === "+") {
        result = num1 + num2;
    } else if (operator === "-") {
        result = num1 - num2;
    } else if (operator === "*") {
        result = num1 * num2;
    } else if (operator === "/") {
        // Перевіряємо, щоб не було ділення на 0
        if (num2 === 0) {
            alert("Помилка! Ділення на нуль неможливе.");
            result = "невизначено";
        } else {
            result = num1 / num2;
        }
    } else {
        alert("Невідома операція! Використовуйте тільки +, -, * або /.");
        result = "невизначено";
    }

    // Виводимо результат, якщо він визначений
    if (result !== "невизначено") {
        alert(`Результат: ${num1} ${operator} ${num2} = ${result}`);
    }
}
