var fn = 5;
var sn = 7;
var sum = fn + sn;

// the sum task

console.log(sum);


// max task

if (fn > sn) {
    console.log(fn);

} else {
    console.log(sn);

}


// even odd task

if (sum % 2 === 0) {
    console.log("the number is even");

} else {
    console.log("the number is odd");

}


// months task

var months = ["jan", "feb", "mars", "april", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];
var selector = 3;

switch (selector) {
    case 1:
        console.log(`${months[0]} has 30 days`);
        break;
    case 2:
        console.log(`${months[1]} has 29 days`);
        break;
    case 3:
        console.log(`${months[2]} has 31 days`);
        break;
    case 4:
        console.log(`${months[3]} has 30 days`);
        break;
    case 5:
        console.log(`${months[4]} has 31 days`);
        break;
    case 6:
        console.log(`${months[5]} has 31 days`);
        break;
    case 7:
        console.log(`${months[6]} has 30 days`);
        break;
    case 8:
        console.log(`${months[7]} has 30 days`);
        break;
    case 9:
        console.log(`${months[8]} has 30 days`);
        break;
    case 10:
        console.log(`${months[9]} has 31 days`);
        break;
    case 11:
        console.log(`${months[10]} has 30 days`);
        break;
    case 12:
        console.log(`${months[11]} has 31 days`);
        break;

    default:
        console.log("month is wrong");
        break;
}

var character='i';
if (character === "a" || character === "o" || character === "i" || character === "u" || character === "e") {
    console.log("the character is vowel");
} else {
    console.log("the character is const");
}