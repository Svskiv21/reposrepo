const express = require('express') // load module express
const app = express() // create an Express application
const port = 3000 // define port on which application is listening
var today = new Date(); // get current date

app.get('/', (req, res) => { // show info on our website
  console.log(req.socket.remoteAddress); // collecting ip
  console.log(req.ip);                   // collecting ip
  res.send("Client's ip address: " + req.ip + " | Your current date is: " + new Date); // printing ip + system date
}) 

app.listen(port, () => { // show info in terminal logs
  console.log(`Server's author: Natalia Krukar`) // printing in console static text
  console.log(`Container is up since: ${today}`) // printing date of launching container
  console.log(`Application listening on port: ${port}`) // printing defined port
}) 