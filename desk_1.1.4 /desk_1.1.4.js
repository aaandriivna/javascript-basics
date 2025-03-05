// Запитуємо у користувача довжину пароля
let length = prompt("Введіть довжину пароля:");

// Перетворюємо введене значення у число
length = parseInt(length);

// Перевіряємо, чи введено коректне число
if (isNaN(length) || length <= 0) {
    alert("Будь ласка, введіть коректну довжину (позитивне число)!");
} else {
    // Символи, з яких будемо генерувати пароль
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let password = "";

    // Генеруємо пароль випадковим чином
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    // Виводимо згенерований пароль
    alert("Ваш випадковий пароль: " + password);
}

