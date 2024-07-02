//imports
const express = require('express')
const morgan = require('morgan')


//Constance
const app = express()
// dynamically change port
//const PORT = 3000

//middleware
//app.use(morgan('dev'))


/*
app.get('/greetings/:userName', (req, res) => {
    return res.send(`Hello there, ${req.params.userName}`)
})


app.get('/roll/:number', (req, res) => {
    const {number} = req.params
    if (!Number.isInteger(parseInt(req.params.number))) {
        return res.send('you must specify a number')
    }
    //const number =  req.paams.number
    //if (isNaN(number)){
   // return res.send('You must specify a number'.)
   //} else {
   //return res.send(string(Math.floor(Math.random() * number)))
   //}

    const maxNumber = parseInt(number, 10)
    const rolledNumber = Math.floor(Math.random() * (maxNumber + 1))
    res.send(`you rolled a ${rolledNumber}`) 

    

})
*/
/*
const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index
    //const item = collectibles[index] make a varible 
    if(!collectibles[index]) {
        return res.send('This iten is not yet in stock, Check back soon')
    }
    return res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`)
   
   
   // const [indexNumber] = req.params.indexNumber
   // if (indexNumber)
    //    return res.send(`<h1>So, you want ${req.params.name}? for ${req.params.price}, it can be yours</h1>`)

    //res.send('<h1>INDEX</h1>')
    })



*/

//app.get('/shoes', (req, res) => {

//})







app.listen(3000, () => {
    console.log('express server has started on port 3000')
})
app.listen()