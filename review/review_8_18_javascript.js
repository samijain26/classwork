// Q+A
/*  How do we assign value to a variable? Using assignment  ( =) operator. e.g. let x = 5

2.  how do we change the value of a variable? we assign new value to the variable let num =5

3 how do we assign existing variable a new value? giving /changing existing variable to new value  eg
let num =4
  num = 7 so new value for num is 7

4. What is declare,assign ,define ? declare is used to declear a variable. Assign is used to assign a value to the variable.
define is used to define the data type

5.What is psedocoding? Pseudocoding is the set of instruction (algorithm) to perform a certain task
This is helful as we can work on the logic or flow of the program in simple 
set of instruction before we code that program in a particular language .

6. what  percentage time you shold spent ? easy problem comes quickly but difficult question  take long time 
to think before we can start coding

B. string

1. let firstVariable
2. firstVariable = "Hello World"
3.   firstVariable = 3
4.  let secondVariable = firstVariable
5. secondVariable = "Hello"
6.  firstVariable = 3 //first variable would keep value 3
7. const yourName " Sami"
   let message = " hello , my name is " + yourName)

C  Boolean*****
7. <
8. >
9. ==
11. ||
12. &&,&&,&&,&&,||
13.  &&
14. ==
15. +  ===  
16  *  === 
17. == 

D *****
1. let animal = "cow"
    if (animal === "cow"){
        console.log("mooooo")
    }else {
        console.log("Hey you are not cow")
    }

E Driver Ed ******

1.  let perssonAge = 20
  
    if (perssonAge >= 16){
        console.log("Here are the keys!")
    }else
       console.log("Sorry !You are too young.")
    }   
 loop A **********
  1. for (let i = 0 ; i <= 10 ; i ++){
         console.log(i)
    }

  2. for (let i = 10 ; i <= 400 ; i ++){
        console.log(i)
    }

3. for (let i = 12 ; i <= 4000 ; i += 3){
    console.log(i)
  }


B 1******** Even number
  for (let i = 1; i <= 100; i ++){
    if (i % 2 == 0){
        console.log(i) 
    }
    
  }

B 2 ********
for (let i = 1; i <= 100; i ++){
    if (i % 2 == 0){
        console.log(i + " <-- is a even number") 
    }
    
  }

c 1
for (let i = 0; i <= 100; i ++){
    if (i % 5 == 0){
         console.log("I found a " + i + ". High five !" ) 
    }
    
  }

c 2 hive five 3 crowd*****************
for (let i = 0; i <= 100; i ++){
    if (i %3 ==0 && i % 5 == 0){
        console.log("I found a " + i + ". Three is a crowd !" ) 
        console.log("I found a " + i + ". High five !" ) 
    }else{

        if (i % 3 == 0){
         console.log("I found a " + i + ". Three is a crowd !" ) 
        }
        else if (i % 5 == 0){
         console.log("I found a " + i + ". High five !" ) 
        }else{
            continue
         }
    
     }
    }

    Saving Account *****

    let bank_account = 0
    for (let i = 1 ; i <= 10; i ++){
        bank_account += i
        
    }
    console.log(bank_account)
bonus **************
    let pay= 0
    for (let i = 1 ; i <= 100; i ++){
       pay = pay + i
        
    }
    console.log("Bank Account balance is : " + pay * 2)

Arrays and control flow *******

1. Element

2. yes Array is the ordered list where you can access element using index

3. Some real life example:
   list of student
   list of songs
   list of address and so on

 B******
   const quotes = ["Work hard for success","Never give up","Dream high to reach the sky"]

C ********Accesing element in array

const randomThings = [1,10,"Hello",true]

 1. randomThings[0]

 2. randomThings[2] = "World"


3.  const randomThings = [1,10,"Hello",true]

         randomThings[0]
        randomThings[2] = "World"    //assigning new value
  
        console.log(randomThings[2] = "World")    //checking updated value
        console.log(randomThings)        //checking updated array  

 CHANGE VALUES IN ARRAY  ************

 1,2,3/  const ourClass = ["Salty", "Zoom", "Sardine","Slack", "Github"]
     console.log(ourClass[2])  //3rd element
     ourClass[4] = "Octocat"   // change Github to Octocat
     ourClass.push("Cloudcity")   //adding new element Cloudcity
     console.log(ourClass)

E Mix it up ************************

1.2,3,4 
    const myArray = [5 , 10 ,500 ,20]
   
     myArray.push("Aegon")   //adding string
     myArray.push("Pizza")
     

     myArray.shift(5)           //remove 5 from beginning
     myArray.unshift("Bob Marley")   //adding string in the beginning
     myArray.pop("Pizza")           //remove pizza 
     
     myArray.reverse()          //reverse Array 

5.  Mutate means to change array. Yes Reverse method did mutate the array. But it does not
     print without console.log 

    
F Biggie small


 let number = 23;
    if (number < 100) {
    console.log("little number");
    } else {
    console.log("big number");
}

   
G Monkey in the middle ******** Print MONkey if number is between 5-10    
let number = 6;
if (number < 5) {
console.log("little number");
} else if (number >10){
console.log("big number");
} else {
    console.log("Monkey");
}

/H what is in closet********
1. console.log("Kristyn is rocking that " + kristynsCloset[2] + "today")

2. kristynsCloset.splice(6,0,"raybans")
3.  kristynsCloset[5] = "stained knit hat"

4. thomasCloset[0][0]
 
5. thomasCloset[1][0]

6. thomasCloset[2][0]

7. console.log("Thom is looking fierce in a " + thomasCloset[0][0] + "," + thomasCloset[1][0] + "," + thomasCloset[2][0] 
      + "!" )
     
 8.    thomasCloset[1][2]  = "Footie Pajamas" 

 IV FUNCTION *********************************

 A    
      function printGreeting(name){
      console.log("Hello there, " +name + "!")
     }
 
       printGreeting("Slimer")


  B     function printCool(name){
          console.log(name + " is cool!")
       }
   
         printCool("Captain Reynold")


C      function calculateCube(l){
        return volume = l*l*l
      }
      console.log(calculateCube(5))



  D    function isVowel(str){
       
        console.log(str.toUpperCase())
        if (str.toUpperCase() == "A" || str.toUpperCase() =="E" || str.toUpperCase() =="I" ||str.toUpperCase() =="O" ||str.toUpperCase() =="U"){
          return true
        }
        else{
          return false
        }
        
      }
      console.log(isVowel("U"))


E    function getTwoLengths(str1,str2){
      const Number = []
      Number.push(str1.length)
       Number.push(str2.length)
       return Number
}
    console.log(getTwoLengths("sami","Jain"))



F    function getMultipleLengths(string){
      const Number = []
      console.log(string.length)
      for (let i = 0 ;i < string.length ; i++){
        Number.push(string[i].length)
       
      }
      
       return Number
}
     console.log(getMultipleLengths(["Hello","what","is","up","dude"]))  


G   maxOfThree*********

    function maxOfThree(num1,num2,num3){
          if (num1== num2 && num2 == num3){
            return num1
          }else if(num1 > num2 && num1 >num3){
            return num1 
          }else if(num2 > num1 && num2 >num3){
            return num2
          }else if (num1 == num2 && num1 >num3){
            return num1
          }else if (num1 == num2 && num2 > num3){
            return num2
          }else if (num1 == num3 && num1 > num2){
            return num1
          }else if(num1 == num3 && num2 > num1){
            return num2
           }else{
            return num3
           }
        

      }
      
    console.log("largest number is : "  + (maxOfThree(33,21,210)))
    
    
H print longest word **************
 
function printLongestWord(str){
    let longest = ' '
        for (let i = 0 ;i < str.length ; i++){
          if(str[i].length > longest.length){
            longest =str[i]
          }
        }
        return longest
      }
     console.log(printLongestWord(["Bojeck","Princess","is","peanutbutter","dude"]))  
    
 Object**********************
   
 const user = {
  name :"Sam",
  age : 30,
  email : "samijain26@yahoo.com",
  purchased :[],
 }
console.log(user)

update email**************************
user.email="hi@yahoo.com"
    console.log(user)

update age *********
  user.age ++    

Adding keys and value ***********
  
  user.location = "New jersey"


 shopaholic************************
  1.  user.purchased.push("milk")
 
  2.   user.purchased.push("Peace of mind")

  3.  user.purchased.push("Merino jodhpurs")

  4.  console.log(user.purchased[2])
    
  E object with in object **********************************
  
  1.   user.friend = {
        name : "Mona",
        age  : 30,
        location : "India",
        purchased array : []

        }

  2.  console.log(user.friend.name)

  3.  console.log(user.friend.location)


  4.   user.friend.age = 55

  5. user.friend.purchased.push("The One Ring")

  6. user.friend.purchased.push("A latte")

  7. user.friend.purchased[1]


  Loops *****************************

   1. user.purchased.forEach((item) =>console.log(item))

   2.  user.friend.purchased.forEach((item) =>console.log(item))


   Functios can operate on objects

   1.2.3.  function updateUser(){
            user.age++
            user.name = user.name.toUpperCase() 

              }

            updateUser()

 2.    function oldandloud(person){
        return person.age++
         }  
         oldandloud(user)



Hungry for more*****************************************
    
Mama cat

    const cat1 = {
      name : "Mama Cat",
      breed  : "Persian",
      age : 10
    }
      console.log(cat1.age)
      console.log(cat1.breed)

PAPA CAT

      const cat2 = {
        name : "Papa cat"
        breed  : "Savannah",
      age : 12
      }
     
  COMBINE CAT
      

      function combineCats(mama,papa){
           const newCat ={
               name : cat1.name + cat2.name,
               breed : cat1.breed +"_"+ cat2.breed,
               age : 1
           }
          
           return newCat
         }
         
     console.log(combineCats(cat1,cat2))


  CAT BRAIN BENDER

   console.log(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)))

    console.log(combineCats(combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2)),combineCats(combineCats(cat1,cat2),combineCats(cat1,cat2))))


  */
 
     //*******Yea finished the first review.So proud of myself */