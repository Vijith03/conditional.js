// Use logical operators to find whether the age of a person lies between 10 and 20?
var age=8
     if( age<=20 && age>=10){
        console.log("age between 10 and 20")
    }
    else{
        console.log("age not between 10 and 20")
    }



// Demonstrate the  use of switch case statements in js

let week = 5; 

switch (week) {
    case 1:
        console.log("Sunday.");
        break;
    case 2:
        console.log("Monday.");
        break;
    case 3:
        console.log("Tuesday.");
        break;
    case 4:
        console.log("Wednesday.");
        break;
    case 5:
        console.log("Thursday.");
        break;
    case 6:
        console.log("Friday.");
        break;
    case 7:
        console.log("Saturday.");
        break;
    default:
        console.log("Invalid roll.");
}



// Find whether a number is divisible by either 2 or 3

 var n=4
    if(n%2==0 || n%3==0){
         console.log("number is divisible by 2 and 3")
     } 
    else if(n%2==0){
        console.log( + n + "  is  divisible by 2")
     }
     else if(n%3==0){
        console.log( + n + "  is  divisible by 3")
     }
     else{
        console.log( + n + "  is not divisible by 2 and 3")
     }





 // Find whether a number is divisible by 2 and 3

 var n=5
 if(n%2==0 && n%3==0){
     console.log(" divisible by 2 and 3")
 } 
 else{
     console.log(" not divisible by 2 and 3")
 } 




// Print "You can Drive" or "You can't Drive" based on age being greater than 18 using ternary operator
var age=18
if(age<18){
    console.log("you can't drive")
}
else {
    console.log("you can drive")
}