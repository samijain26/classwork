let random = require("./utilities/random")
for (let i=0; i < 10 ; i++){
console.log("random : " + random(100,200))
}

let circle = require("./utilities/circle")
console.log("area :" + circle.area(10))
 console.log("circumference : " + circle.circum(10))