let gameNum = 8;
let userNum = prompt("Guess the number (0-10)");
while(gameNum!=userNum){
    console.log("Incorect");
    userNum = prompt("Guess the number (0-10)");
}
console.log("Correct");