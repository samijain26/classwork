var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  let mainEl =document.querySelector("main")
  
  mainEl.style.backgroundColor = "#4a4e4d"
  mainEl.innerHTML =  "<h1> SEI Rocks! </h1>"

  mainEl.setAttribute("class","flex-ctr")

  let topMenuEl =document.querySelector("#top-menu")
  topMenuEl.style.height="100%"
  topMenuEl.style.backgroundColor = "var(--sub-menu-bg)"
 topMenuEl.setAttribute("class","flex-around")

 for (item of menuLinks){
  let newtag = document.createElement("a")
  newtag.setAttribute("href",item.href)
  newtag.innerText = item.text
  topMenuEl.appendChild(newtag)

 }


