let min,max
 
 const randomInt =function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
 

  module.exports = randomInt