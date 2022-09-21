function query(event) {

    console.dir(event)
  
    // use this variable to store the value of the current borough (as a string)
    // EXAMPLE: let borough = "BRONX"
    let borough = event.target.name
  
    // use this variable to store the number of results the user requested (as a string or number)
    // EXAMPLE: let numOfResults = 5
  
    let numOfResults = Number(document.querySelector("input").value) || 10
  
    // leave the next four lines alone 
    // in a nutshell, we make a request to a free and public api that handles NYPD data 
    // and it eventually gives us back an object (JSON) to deal with 
    
    let api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough.toUpperCase()}&$limit=${numOfResults}`
  
    fetch(api)
      .then((data) => data.json())
      .then((json) => showResults(json));
  
  }
  
  
  // you'll do most of your DOM Manipulation in this function
  function showResults(complaints) {
  
    let eventListing = document.querySelector("#event-listing")
  
    while (eventListing.firstChild) {
      eventListing.removeChild(eventListing.firstChild)
    }
  
    for (let i = 0; i < complaints.length; i++) {
      const li = document.createElement("li")
      li.textContent = complaints[i].complaint_type
      const responseBtn = document.createElement("button")
      responseBtn.textContent = "Police Response"
      responseBtn.classList.add("response")
      eventListing.appendChild(li).appendChild(responseBtn)
  
      function showResponse(event) {       
          if (event.target.classList.contains("clicked")) {
            event.target.nextElementSibling.remove()
            event.target.classList.remove("clicked")
          } else {
            let response = document.createElement("div")
            response.textContent = complaints[i].resolution_description || "No response"
            li.appendChild(response) 
            event.target.classList.add("clicked")
          }
  
       }
        responseBtn.addEventListener("click", showResponse)
  
      }
    }
  
  let buttons = document.querySelectorAll("button")
  for (let button of buttons) {
    button.addEventListener("click", query)
  }