
//const age=10;

//string
//const firstname="Sami";


// boolean


//concatination


//print output




//let num=10

//console.log(num)
//pascal case first lower case and then upper case
//MyName
//Kebas case  my_name
//camel case  myName
//and &&
//or !!
//not !
// loose comparision ==
//strict comparision ===
//1=='1' loose comparision  true
//1===1 strict comparion true
//1==1 true
//1==='1' 

// sum of two number

let num1= 5;
let num2 = 10;
let sum;
sum = num1 + num2;
console.log(sum);

//difference of two number

let num4=12;
let num5=3;
let diff=sum-=num5;
console.log(diff);

//multiplication of two number

let mul=num4 * sum;
console.log(mul);

//finding average

let num3=2;
let num6=4;
let num7=6;
let num8=7;
let num9=9;
let num10=10;

let avg1=(num1+num2+num3+num4+num5)/5;
let avg2=(num6+num7+num8+num9+num10)/5;
let finalavg=(avg1+avg2)/2;

console.log(finalavg);




// find average of different number


let firstavg=(4+10+22-30+55)/5;
console.log(firstavg);

let secondavg=(68+7-22+9+100)/5;
console.log(secondavg);

secondfinalavg=(firstavg+secondavg)/2;
console.log(secondfinalavg);

//extra swap values

let box1=4;
let box2=2;
let temp;

temp=box1;
box1=box2;
box2=temp;
console.log("new value box2:"+" "+box2);
console.log("new value of box1:"+" "+box1);

//checking positive or negetive

let numm=5;
if (numm < 0){
    console.log("number is negetive")
}else{

    console.log("number is positive")
}
age=10
if (age<=18){
    console.log("you are too young")
}else{
    console.log("welcome to adulthood")
}


let number=45;
if (number >0 && number <100){
    console.log("number is positive but less than 100")
}
else if (number >0 && number >100){
    console.log("number is positive and grater than 100")
}
else{
    console.log("number is negetive")
}

//grade
let score=45;
if (score>=90)
{
    console.log("you got an A")

}
else if(score>=80)
{
console.log("You got B")
}
else if (score >=70)
{
    console.log("you got C")
}
else if (score >=55)
{
    console.log("you got D")
}
else{
    console.log("you failed")
}

//letter grade using switch
let grade="B";
switch(grade)
{
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("VOWEL")
        break;

default:
    
    console.log("consonent")
    break;
}

//using ternary oprator
let numgiven=5;
let posorneg =
numgiven <0 ?
 'Negetive':
 numgiven >0 ?
  'positive':
  'neither positive or negetive'

console.log(posorneg)


