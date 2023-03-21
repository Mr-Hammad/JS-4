//__QUESTION NO 1__//



var num = prompt("Enter Number", "3.45214")
document.write("Number : " + num + "</br>")


var num1 = Math.round(num)
document.write("Round off value :  " + num1 + "</br>")

var num2 = Math.floor(num)
document.write("Floor value : " + num2 + "</br>")

var num3 = Math.ceil(num)
document.write("Ceil value : " + num3 + "</br>")



//__QUESTION NO 2__//



var num = prompt("Enter Number", "-2.673")
document.write("Number : " + num + "</br>")


var num1 = Math.round(num)
document.write("Round off value :  " + num1 + "</br>")

var num2 = Math.floor(num)
document.write("Floor value : " + num2 + "</br>")

var num3 = Math.ceil(num)
document.write("Ceil value : " + num3 + "</br>")


//__QUESTION NO 3__//

var absolute = prompt("Enter value","-3")

var number = Math.abs(absolute)
document.write("The absolute value of " + absolute + " is " + number)


//__QUESTION NO 4__//


var random = Math.random(random)
random = random * 6
var random1 = Math.ceil(random)
document.write("Random dice Value  : " + random1)


//__QUESTION NO 5__//

var coin = Math.random(coin)
coin = coin * 2
var coinValue = Math.ceil(coin)
document.write(coinValue)
if (coinValue == 1) {
    document.write("</br>Random coin value : heads")
}
else{
    document.write("</br>Random coin value : tails")
}

//__QUESTION NO 6__//

var randomNumber = Math.random(randomNumber);
var value = randomNumber * 100;
value = Math.ceil(value)
document.write("Random Number between 1 and 100 : " + value)


//__QUESTION NO 7__//

var userInput = prompt("Enter you weight in Kilograms " , "58.3kgs")
var value = userInput.slice("0","4")

document.write("The weight of the user is " + value + " kilograms")

//__QUESSTION NO 8__//


var randomMatch = Math.random(randomMatch)
randomMatch = randomMatch * 10
var randomCeil = Math.ceil(randomMatch)
var match = prompt("Enter number from 1 to 10","5")
if(match == randomCeil){
    document.write("Congratulations ")
}
else{
    document.write("Try Again")
 }
