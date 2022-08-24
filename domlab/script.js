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

  let topMenuEl =document.querySelector("nav")
  topMenuEl.style.height="100%"
  topMenuEl.style.backgroundColor = ""

