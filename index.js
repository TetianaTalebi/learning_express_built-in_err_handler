const express = require('express');
const app = express();
const AppError = require('./AppError');


app.get('/', (req, res) => {
    res.send('Home page!')
})


app.get('/error', (req, res) =>{
    chicken.fly();
})

app.use((err, req, res, next)=>{
    console.log("*************************");
    console.log("*************************");
    console.log("*********ERROR***********");
    console.log("*************************");
    console.log("*************************");
    res.status(500).send("We've got an error");
})


// Start a web server and listen to the connections on port 8080
app.listen(8080, ()=>{
    console.log('Listening on port 8080!')
})