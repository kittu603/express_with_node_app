const express = require('express');
const app = express();
const path = require('path');
const cookieSession = require('cookie-session') //tracks user sessions

const routes = require('./routes')    //importing routes module here

const PORT = 3000;

//cookie middleware
app.set('trust proxy', 1);

app.use(cookieSession({
    name :'session',
    keys : ['asasghas567','kjahsjas6754'],
}));


//importing below services 
const FeedbackService =  require('./services/FeedbackService')
const SpeakerService = require('./services/SpeakerService')

//instantaing with json data (That class expects in services)
const feedbackService = new FeedbackService('./data/feedback.json')
const speakerService = new SpeakerService('./data/speakers.json')

app.set('view engine', 'ejs')                           //telling express that i am using ejs template engine
app.set('views',path.join(__dirname,'./views'))              //telling express where to find views

/*
I'm just now pointing to the whole static folder. This will instruct 
Express to look into the static folder for each request it receives and, 
if it finds a matching file, it will send it to the browser
*/

app.use(express.static(path.join(__dirname,'./static')));  //app.use >> using some middleware, here express.static to load css,js

//using routes here, 

app.use('/',routes({
    //passing as params to routes to show data in respective routes
    speakerService,
    feedbackService
}));   //middleware telling that any route for / should redirect to routes module in index.js




app.get("/speakers", (req, res) => {
    //route telling to send speakers.html file as res which /speakers trigerred
    res.sendFile(path.join(__dirname,'./static/speakers.html'))
});

console.log('added nodemon, NODEMON IS WATCHING');   //nodemon restarts the server when save pressed


app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`)
})

