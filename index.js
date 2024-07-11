const express = require('express');
const app = express();
const AppError = require('./AppError');

const verifyFakePassword = (req, res, next)=>{
    const {password} = req.query;
    if (password==='chicken'){
         return next();
    }
    throw new AppError('Password required!', 401);
    // res.send('Sorry, you need a password!');
}


app.get('/', (req, res) => {
    res.send('Home page!')
})

app.get('/error', (req, res) =>{
    chicken.fly();
})

app.get('/secret', verifyFakePassword, (req, res) =>{
    res.send('There is no secret!');
})

app.use((err, req, res, next) =>{
    const {status} = err;
    res.status(status).send('ERRORRRR!')
})



// app.use((err, req, res, next)=>{
//     console.log("*************************");
//     console.log("*************************");
//     console.log("*********ERROR***********");
//     console.log("*************************");
//     console.log("*************************");
//     res.status(500).send("We've got an error");
// })


// Start a web server and listen to the connections on port 8080
app.listen(8080, ()=>{
    console.log('Listening on port 8080!')
})