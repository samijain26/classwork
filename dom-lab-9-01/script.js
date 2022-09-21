let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
  
    // Part 1
    var nTitle = document.querySelector("h1")
    nTitle.innerHTML = "<h1>World Trip</h1>"


  
    // Part 2
   document.body.style.backgroundColor = "yellow"
    // Part 3
    let FavThings = document.getElementById("favorite-things")
    
    FavThings.removeChild(FavThings.lastElementChild);
    
    
    // Part 4
    let specialTitle = document.querySelectorAll(".special-title")
    for (let item of specialTitle){
      console.log(specialTitle)
       item.style.fontSize = "2rem"
    }
  
    // Part 5
    let ul = document.querySelector("#past-races")
    let lis = document.querySelectorAll("#past-races li")
   console.log("i am",ul)
    for (let item of lis){
    if(item.textContent === "Chicago"){
      console.log('i am in')
      // pastRaces.parentNode.removeChild(item)
      item.remove()
    }
    }
  
    // Part 6

    let newLi = document.createElement("li")
  
    newLi.textContent ="India"

    ul.appendChild(newLi)
     newLi = document.createElement("li")
  
    newLi.textContent ="Japan"

    ul.appendChild(newLi)



  
    // Part 7
  let pDiv= document.querySelector(".main")  //get ,main div container

 // let ndiv = document.createElement("div")

var div = document.createElement("div");    //create a new div element
const att = document.createAttribute("class");  //create class attribute
att.value = "blog-post purple"   // Set the value of the class attribute:
div.setAttributeNode(att);
var h = document.createElement("h1"); //create the h1 tag 
var p = document.createElement("p"); //create the paragraph tag



 // give it a class by adding to the list
p.innerHTML = 'I PARKED MY CAR IN FRONT OF WORLD WONDER TAJMAHAL'; // add html text or make another element if needed.
h.innerHTML = "INDIA"
//div.
div.appendChild(h);
div.appendChild(p); //add the <p> element to the div 
pDiv.appendChild(div);
  
 

 
    // Part 8
    let newQuote = document.querySelector("#quote-title")
     newQuote.addEventListener("click",function(event) {
     
      event.target.textcontent=randomQuote();
     })
  
  
    // Part 9
    let blogPost = document.querySelectorAll(".blog-post")
    for (let item of blogPost){
      console.dir(blogPost)
      
      item.addEventListener("mouseenter", (event) => {
        // highlight the mouseleave target
        event.target.classList.toggle("red")
     //item.classList.toggle("red")
      })
      
       item.addEventListener("mouseleave", (event) => {
        event.target.classList.toggle("purple")
          // highlight the mouseout target
          //item.classList.toggle("purple")
    })
      }
  
  
  
  });