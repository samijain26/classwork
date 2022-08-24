class  Hamster {
   
    constructor(name){
        this.owner = " ";
        this.name = name ;
        this. price =15 ;
    }

    wheelRun() {
        console.log(" squeak squeak")
    }
    eatFood() {
        console.log("nibble nibble")
    }
    getPrice(){
        return this.price
    }
}

const hamster1 = new Hamster("Tabby")


//person class*****************************

class Person {
    constructor(name){
        this.name = name ;
        this.age = 0;
        this.height = 0;
        this.weight = 0;
        this.mood = 0;
        this.hamster = [];
        this.bankAccount = 0;


    }
    getName(){
        return this.name 
    }
    getAge(){
        return this.age
    }
    getWeight(){
        return this.weight 
    }
    greet(){
        console.log("Hello : " + this.getName(name))
    }
    eat(){
        this.weight ++
        this.mood ++
    }
    exercise(){
        this.weight --

    }
    ageUp(){
        this.age ++
        this.height ++
        this.weight ++
        this.mood --
        this.bankAccount += 10
    }
    buyHamster(newHamster){
        this.hamster.push(newHamster)
        this.mood += 10
        this.bankAccount -= newHamster.getPrice()
    }
}
//const personnew = new Person("Sami")
// console.log(personnew)
// personnew.getName()
// personnew.getAge()
// personnew.getWeight()
// personnew.buyHamster(hamster1)
// console.log(personnew)

//creat story
const timmy = new Person("Timmy")

//2
timmy.ageUp
timmy.ageUp
timmy.ageUp
timmy.ageUp
timmy.ageUp

//3
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()
timmy.eat()

//4
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()
timmy.exercise()

//5
for (let i = 0 ;i <9; i++){
    timmy.ageUp()
}
//6
 const hamster2 = new Hamster("Gus")
 //7
hamster2.owner = "Timmy"

//8
timmy.buyHamster(hamster2)

//9
for(let i = 0;i <15 ; i++){
    timmy.ageUp
}


//10
timmy.eat()
timmy.eat()

//11
timmy.exercise()
timmy.exercise()
//console.log(timmy)

//Chef makes dinner
class Dinner {
    constructor(appetizer,entree,dessert){
        this.appetizer= appetizer
        this.entree = entree
        this.dessert = dessert
    }
}

class Chef {
   
        createDinner(opt1,opt2,opt3){
            const newDinner = new Dinner(opt1,opt2,opt3)
            return newDinner
        }
            
    }
let newChef= new Chef()  //factory object to create dinner
const dinner =newChef.createDinner("samosa","pizza","milkcake")

console.log(dinner)

