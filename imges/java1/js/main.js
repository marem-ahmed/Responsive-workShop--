//const num1 = 5;
//const num2 = 6;
//add two numbers
//const sum = num1 + num2; 
//console.log(sum);
//console.log("The sum of " + num1 + " and " + num2 + " is: " + sum);





// function evenNumber(num){
//     if ((num & 1 ) === 0) {
//         return "Even"; // even number
//     } else {
//         return "Odd"; // odd number
//     }
// }
// function oddNumber(num) {
//     if ((num & 1) == 1) {
//         return "Odd";
//     } else {
//         return "Even";
//     }
// }
// console.log(evenNumber(8));
// console.log(oddNumber(5));






/*
var monthNumber = 11;  // Example month number, change as needed
var monthName;
var monthDays;
if (monthNumber == 1) {
    monthName = "January";
} else if (monthNumber == 2) {
    monthName = "February";
} else if (monthNumber == 3) {
    monthName = "March";
} else if (monthNumber == 4) {
    monthName = "April";
} else if (monthNumber == 5) {
    monthName = "May";
} else if (monthNumber == 6) {
    monthName = "June";
} else if (monthNumber == 7) {
    monthName = "July";
} else if (monthNumber == 8) {
    monthName = "August";
} else if (monthNumber == 9) {
    monthName = "September";
} else if (monthNumber == 10) {
    monthName = "October";
} else if (monthNumber == 11) {
    monthName = "November";
} else if (monthNumber == 12) {
    monthName = "December";
}else {
    monthName = "Invalid month";
}

switch (month) {
    case 1:
    monthDays = 31;
    break;
    case 2:
    monthDays = (isLeapYear(year)) ? 29 : 28;
    break;
    case 3:
    monthDays = 31;
    break;
    case 4:
    monthDays = 30;
    break;
    case 5:
    monthDays = 31;
    break;
    case 6:
    monthDays = 30;
    break;
    case 7:
    monthDays = 31;
    break;
    case 8:
    monthDays = 31;
    break;
    case 9:
    monthDays = 30;
    break;
    case 10:
    monthDays = 31;
    break;
    case 11:
    monthDays = 30;
    break;
    case 12:
    monthDays = 31;
    break;
    default:
    monthDays = "Invalid month"; 
}
console.log("The current month is " + monthName + " and it has " + monthDays + " days.");



/*
var num1 = 10;
var num2 = 20;
function findMax(num1, num2) {
    if (num1 > num2) {
        return num1;  
    } else if (num1 < num2) {
        return num2; 
    } else {
        return "Both numbers are equal";
    }
}
console.log(findMax(num1, num2)); 


*/


let char='l';
let vowels=['a','e','i','o','u','A','E','I','O','U'];
if (char=='a'||char=='e'||char=='i'||char=='o'||char=='u'||char=='A'||char=='E'||char=='I'||char=='O'||char=='U')
{
console.log('Vowel');
}
else
if ((char >='a' && char <='z') || (char >='A' && char <='Z'))
{
console.log('consonant');
}
else 
console.log('Non of them');
