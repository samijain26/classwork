
//gettng express package
const express = require("express");
//declaring the port
const port = 3000;

//declaring expree as a function
const app = express();


//respondinding the request for 99 soda bottles
app.get("/", (req, res) => {
  res.send(
    "<h1>99 Bottles of Soda on the wall</h1><h2><a href='/98'</a>take one out pass it around</h2>"
  );
});

//providing the link for decreasing or increasing number of soda bottles 
//depending on random number generation. If random number is more than .85 then one soda
//bottle would be added else if number is less than .85 then one 
//soda bottle would be taken down an d pass it around. once counter reaches to
//0 then cycle would restart

app.get("/:number_of_bottles", (req, res) => {
  for (i = req.params.number_of_bottles; i >= 0; i--) {
    if (i == 0) {
      res.send(
        "<h1>99 Bottles of Soda on the wall</h1><h2><a href='/98'</a>take one out pass it around</h2"
      );
      return;
    } else if (Math.random() > 0.85) {
      res.send(`<h1>${req.params.number_of_bottles} Bottles of 
    Soda on the wall</h1><h2><a href='/${
      parseInt(req.params.number_of_bottles) + 1
    }'
    </a> Add one more and let the counter be more</h2>`);
    } else {
      res.send(`<h1>${req.params.number_of_bottles} Bottles of 
        Soda on the wall</h1><h2><a href='/${
          parseInt(req.params.number_of_bottles) - 1
        }'
        </a>take one out pass it around</h2>`);
    }
  }
});
 //listening to the port
app.listen(port, () => {
  console.log("running server on port ...", port);
});
