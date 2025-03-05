let userNames = [`Sofiia`];
let userNameCorrect;
do {
    userName = prompt("Enter your name");
    console.log(`user name: ${userName}`);

    isNameCorrect = confirm(`Is your name ${userName}?`);
    console.log(`user name correct: ${isNameCorrect}`);
}
while (!isNameCorrect);

userNames.push(userName);
console.log(userNames);