const express = require('express')

const app = express()


/*
app.get('/greetings/:userName', (req, res) => {
    return res.send(`Hello there, ${req.params.userName}`)
})


app.get('/roll/:number', (req, res) => {
    const {number} = req.params
    if (!Number.isInteger(parseInt(req.params.number))) {
        return res.send('you must specify a number')
    }

    const maxNumber = parseInt(number, 10)
    const rolledNumber = Math.floor(Math.random() * (maxNumber + 1))
    res.send(`you rolled a ${rolledNumber}`) 

    

})
*/

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    { name: 'autographed picture of a dog', price: 10 },
    { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
  ];


app.get('/collectibles/:indexNumber', (req, res) => {
    const [indexNumber] = req.params.indexNumber
    if (indexNumber)
        return res.send(`<h1>So, you want ${req.params.name}? for ${req.params.price}, it can be yours</h1>`)

    //res.send('<h1>INDEX</h1>')


   
})





//app.get('/shoes', (req, res) => {

//})





app.listen(3000, () => {
    console.log('express server has started on port 3000')
})
app.listen()