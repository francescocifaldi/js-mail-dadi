const max = 6;
let userNum = randomIntFrom1to(max);
console.log("User ha tirato: ", userNum);
let cpuNum = randomIntFrom1to(max);
console.log("CPU ha tirato: ", cpuNum);

if(userNum>cpuNum){
    console.log("user ha vinto! il suo ",userNum," batte il ", cpuNum)
} else if (userNum<cpuNum) {
    console.log("CPU ha vinto! il suo ",cpuNum," batte il ", userNum)
} else {
    console.log("pareggio!")
}


function randomIntFrom1to(number){
    let randomInt = Math.floor(Math.random() * max) +1;
    return randomInt;
}