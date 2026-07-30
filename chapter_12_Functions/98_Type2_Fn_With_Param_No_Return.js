function greetByName(name){
    console.log("Hi", name); 
}

greetByName("Pramod"); // Hi Pramod

let result = greetByName("Amit"); // Hi Amit
console.log(result); // undefined


function beggar(money) {
    console.log("Thanks", money);
}

let returnMesomething = beggar(100); // Thanks 100
console.log(returnMesomething); // undefined