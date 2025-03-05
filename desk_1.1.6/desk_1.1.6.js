// Запитуємо у користувача email
let email = prompt("Введіть ваш email:");

// Функція для перевірки email
function validateEmail(email) {
    // Перевіряємо, чи є тільки один "@"
    let atIndex = email.indexOf("@");
    let lastAtIndex = email.lastIndexOf("@");
    
    if (atIndex === -1 || atIndex !== lastAtIndex) {
        return false; // Якщо немає @ або їх більше одного
    }

    // Перевіряємо, чи є хоча б один символ між "@" і "."
    let dotIndex = email.lastIndexOf(".");
    if (dotIndex === -1 || dotIndex < atIndex + 2) {
        return false;
    }

    // Перевіряємо, чи email не починається з "@"
    if (atIndex === 0) {
        return false;
    }

    // Перевіряємо, чи email не починається з цифри
    if (!isNaN(email[0])) {
        return false;
    }

    return true; // Email відповідає всім критеріям
}

// Перевіряємо email і виводимо результат
if (validateEmail(email)) {
    alert(`Ваш email '${email}' коректний`);
} else {
    alert(`Ваш email '${email}' некоректний`);
}