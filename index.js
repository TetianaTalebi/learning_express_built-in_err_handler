const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Home page!')
})


// Start a web server and listen to the connections on port 8080
app.listen(8080, ()=>{
    console.log('Listening on port 8080!')
})