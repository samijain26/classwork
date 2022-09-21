/////////Gives a the blocks of encapsulated code(predefined) no path needed as inbuilt
// const fs = require('fs')
// console.log(fs)

// const daysOfTheWeek = require('./days-of-the-week')

// console.log('message 1')
// ////create a txt file
// /// the creation of file takes some time so JS doesnt wait for it to create, so it goes to next line and print message 2 before creating the file.(asynchronous)
// fs.writeFile('./hello.txt', 'Hello!', function() {
//     console.log('done creating file');
//   });

// //   console.log('message 2')

// let daysOfTheWeek = require('./days-of-the-week') // its a module we created so give the path name to import that module
// // console.log(daysOfTheWeek)
// // now we are able to access the created module day-ofthe-week with some content (PerScholas) added
//  let day1 = daysOfTheWeek.getWeekday
//  console.log(day1)

let request = require('request')

console.log(request)

request('http://jsonplaceholder.typicode.com/users' ,( err,res,body)=>{
  console.log(body)
})