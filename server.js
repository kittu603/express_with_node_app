const express = require('express');
const app = express();
const path = require('path');

const PORT = 3000;

app.set('view engine', 'ejs')                           //telling express that i am using ejs template engine
app.set('views',path.join(__dirname,'./views'))              //telling express where to find views

/*
I'm just now pointing to the whole static folder. This will instruct 
Express to look into the static folder for each request it receives and, 
if it finds a matching file, it will send it to the browser
*/

app.use(express.static(path.join(__dirname,'./static')));  //app.use >> using some middleware, here express.static to load css,js


app.get("/", (req,res) =>{
    
    res.render('pages/index',{title:"welcome"})   //using render, getting index page and passing a var title to index.ejs
});

app.get("/speakers", (req, res) => {
    //route telling to send speakers.html file as res which /speakers trigerred
    res.sendFile(path.join(__dirname,'./static/speakers.html'))
});

console.log('added nodemon, NODEMON IS WATCHING');   //nodemon restarts the server when save pressed


app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`)
})

