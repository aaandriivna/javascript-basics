let userNames = [`Sofiia`];
let userNameCorrect;
do {
    userName = prompt("Enter your name");
    console.log(`User name: ${userName}`);

    isNameCorrect = confirm(`Is your name ${userName}?`);
    console.log(`User name correct: ${isNameCorrect}`);
}
while (!isNameCorrect);

userNames.push(userName);
console.log(userNames); w