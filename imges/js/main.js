//////////  Q1   ///////////////
var  x = 10;
var  y =20;
var sum = x + y;
console.log(sum);

//////////  Q2   ///////////////
var num = 6;
if(num %2 == 0){
      console.log("Even");
} else{
    console.log("Odd");
}

////////   Q3 //////////////////
/////////// max number //////////
var number1 = 6 ;
var number2 = 10 ;

if(number1 > number2){
    console.log("max number is " + number1);
} else{
    console.log("max number is " + number2);
}


////////   Q4 //////////////////
////////   Vowel //////////////////

var  c = 'b';
if(c == 'a' || c == 'e' || c == 'o' || c == 'a' || c == 'u' || c == 'i')
{
    console.log("char is vowel");
} else{
    console.log("char is constant");
}

////////  returen day of month ////////////
var month = "Februarey";
switch (month){
    case("Januarey"):
    console.log("day is 31");
    break;
    case("Februarey"):
    console.log("day is 28");
    break;
    case("March"):
    console.log("day is 31");
    break;
    case("Apriel"):
    console.log("day is 30");
    break;
    case("Mey"):
    console.log("day is 31");
    break;
    // case("Januarey"):
    // console.log("day is 31");
    // break;
    case("June"):
    console.log("day is 30");
    break;
    case("July"):
    console.log("day is 31");
    break;
    case("Augest"):
    console.log("day is 30");
    break;
    case("October"):
    console.log("day is 31");
    break;
    case("November"):
    console.log("day is 30");
    break;
    case("December"):
    console.log("between 30 or 31 ");
    break;
}