var itemPrice = 99.00
var moneyInWallet = 120.00
var numFriends = 4
var age = 46
var firstName = "Becky"
var lastName = "Lang"
var middleInitial = "J"

//New amount of money in wallet after buying item
if (moneyInWallet = moneyInWallet - itemPrice){
console.log(`Money I have left is ` + moneyInWallet);
}
//Number of friends I've made each year based on my age variable & my number of friends variable
if (averagePerYear = (numFriends / age)){
    console.log(`My average number of friends made per year is `+ averagePerYear);
}
//Full name based on first name, middle initial, and last name
if (fullName = firstName + " " + middleInitial + " " + lastName){

    console.log(`You may call me ` + fullName);
}
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
console.log(fruits);

let names = ["Ricky", "Tali", "Ed", "Sassy", "Margaret"]
let lengths = names.map (function(element) {
    return element.length;
});
console.log(lengths);

let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
})
console.log(sum);

names.forEach(function(element) {
console.log(element);
})

let evens = names.filter(function(element){
    return element.length % 2 == 0; 
});
console.log(evens);

let removedElement = names.splice(1,1);
console.log(removedElement);

function myFunction() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
}
myFunction();

var i = 0
while (i < 10){
    console.log(i)
    i++
}
var i = 0
while (true){
    console.log(i)
    i++
    if (i == 5 ){
        break
    }
}
console.log("BREAK");

//Loop through an array using a while loop
var arr = ["tim", "joe", "bill"]
var i = 0
while (i < arr.length){
    console.log(arr[i])
    i++
}

var arr = []
var i = 0
while (i < 20){
    arr.push(i)
    i++
}
console.log(arr);
