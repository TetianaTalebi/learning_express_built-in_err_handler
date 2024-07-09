const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home page!')
})


app.get('/error', (req, res) =>{
    chicken.fly();
})


// Start a web server and listen to the connections on port 8080
app.listen(8080, ()=>{
    console.log('Listening on port 8080!')
})