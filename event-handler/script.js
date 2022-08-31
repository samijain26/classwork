
// //Select the elemnt ans store in a variable
// const btn=document.querySelector('button')// target=button
// //then attach an event listener to that elemt
// btn.addEventListener("click",function(evt){//type=click

//     // ..evt represents the object
//     //example of event objects:
//     //target
//     //x,y cordinates
//     //.this is nothing but the current target element<button>
//     // console.log(this)
//     console.log(evt)//console log this event object which containes all the properties

// //1.create new Element:
// const li=document.createElement('li')//creats element in memory
 
//  //2.add text to element
// const input=document.querySelector('input')
//    // console.dir(input)// this gives all the property of input
//    // to access its value use value 
// li.textContent=input.value

// //3.Append the new elemnt(list) to dom inside ul tag>

// // const ul=document.querySelector('ul')
// // ul.appendChild(li)
// document.querySelector('ul').appendChild(li)
// //remove the appended value

// // li.addEventListener('click', (e) => { e.stop(Propagation(); });


// })




// //////////////////////////////////////////////////////////////
// //select ul tag:
// const ul = document.querySelector('ul')

// ul.addEventListener('click',handleClick)

// function handleClick(evt){
   
//     if(evt.target.tagName==='LI')//checkig tagname
//     {
//     evt.target.style.color='red'
// }
//     // console.log('Clicked on list')//when u click on list it get consolelogged
//     // console.log(evt.target) // litags are target
// }

// //////////////////////////////
// //making h3 change color on clicking
// const h3text=document.querySelector('h3')
// h3text.addEventListener('click',function(eve){
// h3text.style.color='red'
// })

//Jade code *************************************************

// first select the element we want and store it in a variable (btn)
const btn = document.querySelector("button")

// then attach an event listener to that element
btn.addEventListener("click", function(event) {

    // evt is a special parameter representing the event object
    // the event object has all the info you'll ever need about
    // the event that occured and the element that caused it
    // console.log(event.target) 
    // console.log(this)

    // btn, event.target, and this all represent the same thing:
    // button element

    // create a brand new li tag (in memory) and store it in
    // a constant called "li"
    const li = document.createElement('li')
    console.log(li)

    // select the input element and store it in a variable (input)
    const input = document.querySelector('input')
    console.dir(input)

    // for input elements we'll need to access the "value" property for any text inside it
    console.log(input.value)

    // we target the textContent property of the li tag
    // and we assign it the value of our input 
    li.textContent = input.value

    // const ul = document.querySelector('ul')
    // ul.appendChild(li)

    // we first select the ul tag, and then we add (append)
    // the new li tag, which has our new comment, to the
    // selected ul 

    document.querySelector('ul').appendChild(li)

    input.value = ""
})

// select the ul tag
const ul = document.querySelector("ul")

// add an event listener to our selected ul
ul.addEventListener("click", handleClick)

function handleClick(event) {
    //     console.log('clicked on ul...')
    //     console.log(event)
    //     console.log(event.target)
    //     // event.target.style.color = 'blue'
    // console.log(event.target)
    
        console.log('clicked on...', event.target.tagName)
    
        if (event.target.tagName === "LI") {
            event.target.style.color = "white"
        }
    
        if (event.target.tagName === "UL") {
            event.target.style.backgroundColor = "black"
        }
    }
