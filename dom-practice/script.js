/* open in browser hold on option key and press b */
//alert('t')

//h1 tag is an element modelled as an object with bunch of properties
let h1Tag = document.getElementById("title")

console.log(h1Tag.innerText)
console.dir(h1Tag)
//let ptag =document.querySelector("p")
//using query selector you can select by tag name

//select element by classname(.main-title)

//select by id("#title")

let pEl = document.querySelector(".cool")
let pE2 = document.querySelector(".ptag")

console.log(pEl.innerHTML)
//console.log(pEl.innerText)
console.log(pEl.textContent)

console.dir(pEl)
h1Tag.style.textAlign = "left"
pEl.style.color = "red"

pEl.style.backgroundColor ="blue"

let alink = document.querySelector("a")

alink.setAttribute("href","http://www.google.com")

//getattribute9name),setAttibute(name,value),hasaTTribute(name)

//selecting multiple elements by tag name
let litags = document.getElementsByTagName("li")
console.log(litags)
//multiple element by class name

let litags2 = document.getElementsByClassName("comment")
console.log(litags2)

let litag3 =document.querySelectorAll(".comment")
console.log(litag3)

for (let commentEl of litags2){
    commentEl.style.fontSize ="30 px"
}

    
