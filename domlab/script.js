// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];
  
//   let mainEl =document.querySelector("main")
  
//   mainEl.style.backgroundColor = "#4a4e4d"
//   mainEl.innerHTML =  "<h1> SEI Rocks! </h1>"

//   mainEl.setAttribute("class","flex-ctr")

//   let topMenuEl =document.querySelector("#top-menu")
//   topMenuEl.style.height="100%"
//   topMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
//  topMenuEl.setAttribute("class","flex-around")

//  for (item of menuLinks){
//   let newtag = document.createElement("a")
//   newtag.setAttribute("href",item.href)
//   newtag.innerText = item.text
//   topMenuEl.appendChild(newtag)

//  }
//Task 1.0
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];


let mainEl = document.querySelector("main");

//Task 1.1


mainEl.style.backgroundColor = "var(--main-bg)";

//Task 1.2

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

//Task 1.3

mainEl.setAttribute("class", "flex-ctr");

//Task 2.0


let topMenuEl = document.getElementById("top-menu");

//Task 2.1


topMenuEl.style.height = "100%";

//Task 2.2


topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

//Task 2.3


topMenuEl.setAttribute("class", "flex-around");

//Task 3.0

  
//Task 3.1
for(let link of menuLinks){
let aEle=document.createElement('a')
aEle.setAttribute("href",link.href)
aEle.innerText=link.text
topMenuEl.appendChild(aEle)

}
//DOM Menu Lab =Part-2

//Task 4.0
const subMenuEl = document.querySelector("#sub-menu");

//Task 4..1
subMenuEl.style.height = "100%";

//Task 4.2
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

//Task 4.3
subMenuEl.setAttribute("class", "flex-around"); //class=''flex-around
//other way subMenuEl.classList.add("flex-around")
//Task 4.4
subMenuEl.style.position = "absolute";

//Task 4.5
subMenuEl.style.top = "0";

//Task 5.0

//Task 5.1
topMenuLinks = topMenuEl.querySelectorAll("a");
console.log(topMenuLinks);
var showingSubMenu = false;

//Task 5.2
topMenuEl.addEventListener("click", function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }else{
  console.log(event.target.textContent);
  }
  //Task 5.3
  console.log(event.target.className);
  if (event.target.className === "active") {
    event.target.classList.remove("active");
    showingSubMenu = false;
  subMenuEl.style.top = "0";
  return
  }
  
  // Task 5.4:
  for (let element of topMenuLinks) {
    console.log(element);
    element.classList.remove("active");
  }

//Task 5.5

event.target.classList.add('active')


//Task 5.6

 let linkObj = event.target.text
 //console.log(linkObj)

//to find if any text of active link
let clickedLink
 for (let item of menuLinks){
  //console.log(item.text)
  if (linkObj === item.text){
    console.log("i am in here" + item.text)
     clickedLink = item
     console.log(clickedLink)
  }else if(item.text === "undefined"){
      return
    }
   
  }

//  let activeLink
//   for (let i = 0; i < menuLinks.length; i++) {
//     if (event.target.text == menuLinks[i].text) {
//       activeLink = menuLinks[i]
//     }
//   }
console.log(clickedLink['subLinks'])
   if (clickedLink["subLinks"]){
    //console.log("i am in")
        showingSubMenu=true
        
   }else{
      showingSubMenu=false
      
   }

   //task 5.7
   
//adds links to subMenu

  let buildSubMenu = (subLinks) => {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < subLinks.length; i++) {
      let link = document.createElement('a');
      link.href = subLinks[i].href
      link.textContent = subLinks[i].text
      subMenuEl.appendChild(link) 
    }
  }

    if (showingSubMenu) {
      //console.log("i am here")
      buildSubMenu(clickedLink.subLinks);
      subMenuEl.style.top = '100%'
    } else {
      subMenuEl.style.top = '0%'
    }

    mainEl.innerHTML = `<h1>${event.target.text}</h1>`
  })
;//end of event listner

//6 delegate event listner to submenuel

subMenuEl.addEventListener("click",function (event) {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }else{
 console.log(event.target.textContent);
  }

  //task 6.1  set properties
  showingSubMenu = false
  subMenuEl.style.top = '0%'

  //task 6.2  remove all active class from a tag from topmenu
  for (let i = 0; i < topMenuLinks.length; i++){
    topMenuLinks[i].classList.remove("active") 
  }
  mainEl.innerHTML = `<h1>${event.target.text}</h1>`

})

