const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
require("dotenv").config();
const mongoConfig = require("./config");
const jwt = require("jsonwebtoken");

const app = express();
const PORT = 8080;

app.use(cors()); //middleware
app.use(express.json());

const User = require("./models/User");

//register route
app.post("/register", async (req, res) => {
  try {
    //1. cheack if use exist
    const foundUser = await User.findOne({ username: req.body.username });
    if (foundUser) {
      return res.status(400).json({ error: "user exist" });
    }

    //req.body (username,email,password)
    //2. if they dont,encrypt the password

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(encryptedPassword);
    //user =>password:testiong but in database  fdsf43535gfg

    //3. add the new user to the database with encrypted passowrd
    const newUser = await User.create({
      ...req.body,
      password: encryptedPassword,
    }); //taking everything in reqbody and chaging password

    //generate JWT token and return to user
    const payload = { id: newUser._id, user: newUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:'10h' }); //anystring as second args
    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.meaasage });
  }
});

//login route

// LOGIN ROUTE
app.post("/login", async (req, res) => {
  try {
    // 1. Check if the user exists

    const foundUser = await User.findOne({ username: req.body.username });

    if (!foundUser) {
      return res.status(404).json({ error: "No such user exists" });
    }

    // 2. Check if the password provided by the user matches the database password

    // 1st arg: plain text password
    // 2nd arg: encrypted password
    // return value: boolean (true or false)
    const validPass = await bcrypt.compare(
      req.body.password,
      foundUser.password
    );

    if (!validPass) {
      return res.status(403).json({ error: "Invalid credentials " });
    }

    // 3. Generate a token and return it to the user

    const payload = { id: foundUser._id, user: foundUser.username };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '10h' });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});
//middle ware to authorize header

 function authorize(req, res, next) {
  //1 check if user has token
  try {
    let token = req.header("Authorization");
    if (!token) {
      throw new Error("no token provided");
    }       
      token = token.replace('Bearer ','')
    //2 check token is valid and not expired
      const payload =  jwt.verify(token, process.env.JWT_SECRET)
      //payload -->[id,username]
      if (payload.error) {
          throw new Error(payload.Error.message)
          
      }
    //3   attach a payload from token to request object

      req.userId = payload.id
    // move on to requsted route

    // console.log("inside middleware");
    // return res.status(400).json({ error: "no nono" });

    next();
  } catch (error) {
      res.status(403).json({ error: error.message });

  }
  
}

// RETRIEVE specific USERS
app.get("/info",authorize, async (req, res) => {
  //req.params.username
  //req.header

  console.log("from header:", req.header("Authorization"));

  try {
    const foundUser = await User.findById(req.userId);
    res
      .status(200)
      .json({ username: foundUser.username, email: foundUser.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//retrieve all user
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({ users });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// CLEAR
app.delete("/clear", async (req, res) => {
  try {
    await User.deleteMany({});
    res.status(200).json({ msg: "All users have been deleted " });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// app.get('/test', (req, res) => {
//     res.status(200).json({msg: 'Hello'})
// })
// app.post("/test2", (req, res) => {       //req.body would have all the req

//     console.log(req.body)
//   res.status(200).json({ msg: "Thank You" });
// });

// app.use('',)
//  app.use('',)
app.listen(PORT, () => {
  console.log("Listening on port" + PORT);
  mongoConfig();
});
