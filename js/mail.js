const emailList = ["prova@gmail.com","ciao@libero.it","francesco@live.com"]

let userEmail = prompt ('inserisci la tua email');

if(emailList.includes(userEmail)){
    console.log("sei nella lista")
} else {
    console.log("non sei nella lista")
}