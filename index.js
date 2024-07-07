const express = require('express');
const app = express();


// Start a web server and listen to the connections on port 8080
app.listen(8080, ()=>{
    console.log('Listening on port 8080!')
})