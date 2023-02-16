// 1. Declare an empty array using JS literal notation to store
// student names in future.

var students = ["arqam","ali","noor"];
console.log(students);

// 2. Declare an empty array using JS object notation to store
// student names in future.

var students = Object.values("arqam");

// 3. Declare and initialize a strings array.
 var text = ["cat","cow","mouse"];

// 4. Declare and initialize a numbers array.

var num = ["1","2","3","4"];

// 5. Declare and initialize a boolean array.

var boolean = [true, false];


// 6. Declare and initialize a mixed array.

var array = ["arqam","1",true,];


// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phill","PhD"];
document.write("Qualifications :"+"<br/>"+"1) "+ qualifications[0]+"<br/>"+"2) "+ qualifications[1]+"<br/>"+"3) "+ qualifications[2]+"<br/>"+"4) "+ qualifications[3]+"<br/>"+"5) "+ qualifications[4]+"<br/>"+"6) "+ qualifications[5]+"<br/>"+"7) "+ qualifications[6]+"<br/>"+"8) "+ qualifications[7]);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var std = ["Micheal","Jhon","Tony"];
var marks = ["320","230","480"];
var total = 500;
document.write("Score of "+ std[0] + " is "+ marks[0]+".Percentage: "+ marks[0]/total*100+"%"+"<br/>"+"Score of "+ std[1] + " is "+ marks[1]+".Percentage: "+ marks[1]/total*100+"%"+"<br/>"+"Score of "+ std[2] + " is "+ marks[2]+".Percentage: "+ marks[2]/total*100+"%"+"<br/>");



// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then


// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

var colors = ["voilet","red","blue"];
console.log(colors);
var userColor = prompt("What color do you wnat to add in the begning");
var colors = colors.unshift(userColor);
console.log(colors);


// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.


var scores =[10,20,50,70,80];
scores.sort( function( a,b ) {
    return a - b;
}

)
document.write(scores);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

var city = ["Karachi","Lahore","Quetta","Islamabad","Peshawar"];
var selectedCities = city.slice(2,4);
document.write("Cities: "+"<br/>"+ city+"<br/>"+ "Selected Cities: " +"<br/>"+ selectedCities);



// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var arr = ["This ", " is ", " my ", " cat"];
var result = arr.join('');
console.log(result);
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)


 var arr = [[[]]]
// 2. Declare and initialize a multidimensional array
// representing the following matrix:


// 3. Write a program to print numeric counting from 1 to 10.

for (let i = 1; i <=10 ; i++){
    document.write(i +"<br />");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

var num = +prompt('Enter a number of which table needed');
var len = +prompt('Enter how many time you want it to be multiplied');

for ( let i=1 ; i<= len ; i++  ) {
    document.write(num + " x "+ i + " = " + num*i + "<br />");
}
// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]



// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// document.write("<h1>"+'counting'+"</h1>")
for (let i=1 ; i<=15; i++ ){
    document.write( i+",");
}
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("<h1>"+'Reverse'+"</h1>")
for (let i=10 ; i>=1; i-- ){
    document.write( i+",");
}
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("<h1>"+'Even'+"</h1>")
for (let i=0 ; i<=20; i+=2 ){
    document.write( i+",");
}
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("<h1>"+'odd'+"</h1>")
for (let i=1 ; i<=19; i+=2 ){
    document.write( i+",");
}
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h1>"+'Series'+"</h1>")
for (let i=2 ; i<=20; i+=2 ){
    document.write( i+"k,");
}

//7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// 8. Write a program to identify the largest number in the
// given array.
//A = [24, 53, 78, 91, 12];
let A = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

console.log("The largest number is: " + largest);
// 9. Write a program to identify the smallest number in the
// given array.
A = [24, 53, 78, 91, 12]



const arra = [24, 53, 78, 91, 12];
let smallest = array[0];

for (let i = 1; i < arra.length; i++) {
  if (arra[i] < smallest) {
    smallest = arra[i];
  }
}

console.log(smallest); // output: 12
