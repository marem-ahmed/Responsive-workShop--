// /Write a JavaScript program to calculate the sum of 2 number/ 

// var x = 5;
// var y = 5;
// sum = x + y;
// console.log(sum);




//  /Write a JavaScript program to check number/

// var x = 25;
// if (x % 2 === 0) {
//     console.log(`${x} is even.`);
// } else {
//     console.log(`${x} is odd.`);
// }




// /Write a JavaScript program that takes a month and returns the number of days in that month./ 

var month 
january = 31,
february = 29,
march = 31,
april = 30,
may = 31,
june = 30,
july = 31,
august = 31,
september = 30,
october = 31,
november = 30,
december = 31
console.log(month);




// /Write a JavaScript program to find max number between 2 number/ 

// var x = 1;
// var y = 2;
// if (x > y) {
//     console.log(`${x} is max.`);
// }else{
//     console.log(`${y} is max.`);
// }





//Write  a JavaScript program to check if character vowel or constant/ 

let char = "l";
char = char.toLowerCase();

if (char.length === 1 && /[a-z]/.test(char)) {
    const vowels = "aeiou";

    if (vowels.includes(char)) {
        console.log(`${char} is a vowel.`);
    } else {
        console.log(`${char} is a consonant.`);
    }
} else {
    console.log("Please enter a single alphabetic character.");
}

