// chapter no 9-11


// Question no1

// var city = prompt("Enter city name:");
// if (city === "karachi") {
//     document.write("Welcome to the city of lights!");
// } else {
//     document.write("Welcome to " + city + "! Enjoy your stay.");
// }

// Question 2

// var gender = prompt("Enter your gender:");
// if (gender === "male") {
//     document.write("<h1> Good morning Sir!");
// } else if (gender === "female") {
//     document.write("<h1>Good Morning Ma'am!");
// } else {
//     document.write("<h1>Good Morning!");
// }

// Question no3

// // var color = prompt("Enter the color of traffic signal:");
// if (color === "red") {
//     document.write("Must Stop!");
// } else if (color === "yellow") {
//     document.write("Ready to move!");
// } else if (color === "green") {
//     document.write("Move Now!");
// } else {
//     document.write("Invalid color!");
// }

// Question no4

// var fuel = +prompt("Enter the remaining fuel in your car (in litres):");
// if (fuel === 0.25) {
//     document.write("Please refill the fuel in your car!");
// } else {
//     document.write("You have enough fuel!");
// }

// Question no5

// a.

// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// // b.

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// // c.

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
//     }
//     if (c === 13){
//     alert("condition 2 is true");
//     }
//     if (++c < 14){
//     alert("condition 3 is true");
//     }
//     if(c === 14){
//     alert("condition 4 is true");
//     }

// // d.

// var materialCost = 20000;
// var laborCost = 2000;
//     var totalCost = materialCost + laborCost;
//     if (totalCost === laborCost + materialCost){
//         alert("The total cost is correct");
//     }

// // e.

// if (true){
//     alert("True");
//     }
//     if (false){
//         alert("False");
//     }

// // f.

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Question no6

// var sub1 = +prompt("Enter first subject marks:");
// var sub2 = +prompt("Enter second subject marks:");
// var sub3 = +prompt("Enter third subject marks:");
// var totalMarks = 300;
// var totalObtMarks = sub1 + sub2 + sub3;
// var percentage = (totalObtMarks / totalMarks) * 100;
// var grade = "";
// var remarks = "";
// if (percentage >= 80) {
//     grade = "A-one";
//  } else if (percentage >= 70) {
//     grade = "A";
//  } else if (percentage >= 60) {
//     grade = "B";
// } else {
//     grade = "Fail";
// }
// if (percentage >= 80) {
//     remarks = "Excellent";
//     } else if (percentage >= 70) {
//     remarks = "Good";
//  } else if (percentage >= 60) {
//     remarks = "You need to improve";
//  } else {
//     remarks = "Sorry";
// }
// document.write("<h1>Marks Sheet</h1><br>Total marks: " + totalMarks + "<br>Marks obtained: " + totalObtMarks + "<br>Percentage: " + percentage.toFixed(2) + "%<br>Grade: " + grade + "<br>Remarks: " + remarks);

// Question no7

// var secretNumber = 7;
// var userNumber = +prompt("Guess the secret number (ranging from 1 to 10):");
// if (userNumber === secretNumber) {
//     document.write("Bingo! Correct answer");
// } else if (userNumber === ++secretNumber) {
//     document.write("Close enough to the correct answer");
// } else {
//     document.write("Try again!");
// }

// Question no8

// var num = +prompt("Enter a number:");
// if (num % 3 === 0) {
//     document.write("The number is divisible by 3");
// } else {
//         document.write("The number is not divisible by 3");
//     }

// Question no9

// var num = +prompt("Enter a number:");
// if (num % 2 === 0) {
//     document.write("The number is even");
// } else {
//      document.write("The number is odd");
// }

// Question no10

// var temp = +prompt("Enter the temperature:");
// if (temp >  40) {
//     document.write("It is too hot outside.");
// } else if (temp >  30) {
//     document.write("The Weather today is Normal.");
// } else if (temp >  20) {
//     document.write("Today’s Weather is cool.");
// } else if (temp >  10) {
//     document.write("OMG! Today’s weather is so Cool.");
// } else {
//     document.write("today temperature normal!");
// }

// Question no11

// var firstNumber = +prompt("Enter first number:");
// var operator = prompt("Enter operator:");
// var secondNumber = +prompt("enter second number:");
// if(operator === "+"){
//     document.write("The sum of " + firstNumber + " and " + secondNumber + " is " + (firstNumber + secondNumber));
// } 
// if(operator === "-"){
//     document.write("The difference of " + firstNumber + " and " + secondNumber + " is " + (firstNumber - secondNumber));
// }
// if(operator === "*"){
//     document.write("The difference of " + firstNumber + " and " + secondNumber + " is " + (firstNumber * secondNumber));
// } 
// if(operator === "/"){
//     document.write("The difference of " + firstNumber + " and " + secondNumber + " is " + (firstNumber / secondNumber));
// } 
// if(operator === "%"){
//     document.write("The difference of " + firstNumber + " and " + secondNumber + " is " + (firstNumber % secondNumber));
// }
// else{
//     document.write("Invalid operator!");
// }




