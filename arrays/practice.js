// // find max of two number 
// let num1
//  let  num2
//  function maxOfTwoNumber(num1,num2)
//  {
//  if (num1==num2)
//      {
//              console.log("both  numbers are same")
//             return num1
//      }
//      else if (num1 > num2)
//     {

//          console.log("number 1 is grater than number2")
//          return num1

//     }
//      else
//      {
//         console.log("number 2 is grater")
//         return num2

//     }
// }

// // 2. console.log(maxOfTwoNumber(3,3))

// //three number and return the largest
// // const maxOfThree=function(num1,num2,num3){
// //     if (num1 >num2 && num1> num3){
// //         return num1}
      
// //          else if(num2>num1 && num2 >num3){
// //             return num2}
// //         else{
// //             return num3}
// //     }
// //     console.log(maxOfThree(2,3,6))

// function isCharAVowel(char){
    
//     // 3. console.log(upper)
    
//     if (char.toUpperCase()=="A" || char.toUpperCase() =="E" ||char.toUpperCase()=="I" ||char.toUpperCase()=="O" || char.toUpperCase()||char.toUpperCase()=="U"){
//     return true}
//     else{
//     return false}
// }
// console.log(isCharAVowel("a"))


// // 4. add numbers
// const sumArray=function(...number){
//     let sum=0
//     for(let index=0; index<number.length;index++){
//         sum=sum+ number[index]
        
//     }
//     return sum
// }
// console.log(sumArray(2,23,4))


// // 5.multiply numbers 
// const arrMultiply=function(...number){
//     let product=1
//     for(let index = 0; index < number.length; index++) {
//         product=product *number[index]
        
//     }
//     return product
// }

// //6. number of arguments return
// console.log(arrMultiply(2,10,4))

//  const numArgs=function(...para){
//      let count=0
//     for(let index=0; index<para.length;index++){
//         count=count+1
//          }
//          return count
//  }
//  console.log(numArgs(2,3))

//  //
//  //rewrite function by using argument and parameter

// //fuction for fizzbuzz
// // Fizz buzz
// function fizzBuzz(start,finish) {
//     for(let i = start ; i <=finish ; i ++){
    

//       if (i % 3 === 0 && i % 5 === 0) {
//             console.log(i + " FizzBuzz");
//         } else if (i % 3  === 0) {
//               console.log(i +" Fizz");
//         } else if (i % 5 === 0) {
//               console.log(i +" Buzz");
//         }else {
//               console.log(i);
        
//     }
//     }
//     //console.log(i)
// }
    
// console.log(fizzBuzz(1,50));

//cookies quarter change function

// function cookies(paid,cost){
// let recAmount = paid - cost
// let cents = recAmount *100
//  let quacount = 0
// for (i = 1; i <=cents ; i+=25){
//     quacount = quacount +1

// }
// return "number of quaters is : " + quacount
// }
// console.log(cookies(12,4))

// bonus question for large denomination
let fifty_count=0
let twenty_count=0
let ten_count=0
let five_count=0
let two_count=0
let one_count=0
let quater_count=0
let dime_count=0
let nickle_count=0
let penny_count=0
//let recAmount1=0

//function for largest denomination

function lDenomination(cost1, paid1){
     recAmount1 = paid1 - cost1
    recAmount1=recAmount1*100
    while (recAmount1>0){
         if (recAmount1 >=5000){
             recAmount1 =recAmount1 -5000
             fifty_count = fifty_count + 1
             console.log("Fifty : "+fifty_count)
            }
        if (recAmount1 >= 2000){
            recAmount1 = recAmount1 - 2000
             twenty_count = twenty_count +1
            console.log("Twenty : " +twenty_count)
            }
        if (recAmount1 >= 1000){
            recAmount1 = recAmount1 - 1000
            ten_count = ten_count + 1
            console.log("Ten : " +ten_count)
        }
        if (recAmount1 >= 500) {
            recAmount1 = recAmount1 - 500
            five_count=fifty_count + 1
            console.log("Five : " + five_count)
        }
        if (recAmount1 >= 200) {
            recAmount1 = recAmount1 - 200
            two_count=two_count + 1
            console.log("two : " + two_count)
        }
        if (recAmount1 >=100) {
            recAmount1 = recAmount1 - 100
            one_count=one_count + 1
            console.log("One : " + one_count)
        }
       

        if (recAmount1 > .25) {
            recAmount1 = recAmount1 - .25
            quater=quater_count + 1
            console.log("Quater: " + quater_count)
        }
        
        if (recAmount1 > .10) {
            recAmount1 = recAmount1 - .10
            dime_count=dime_count + 1
            console.log("Dime : " + one_count)
        }
       
        if (recAmount1 > .05 ){
            recAmount1 = recAmount1 - .05
            nickle_count=nickle_count + 1
            console.log("Nickle : " + nickle_count)
        }
        

        if (recAmount1 >=.01 ){
            recAmount1 = recAmount1 - .01
            penny_count=penny_count + 1
            console.log("penny : " + penny_count)
        }
        return recAmount1
    }
   
}
    lDenomination(10.24,70)


