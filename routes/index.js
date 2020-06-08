const express = require('express');


const speakerRoute = require('./speakers')  //imprted speakers.js
const feedbackRoute = require('./feedback')


const router = express.Router();

//params are speakerService and feedbackService to show data

module.exports = (params) =>    //exporting this module so that router can be used(returned the same), this is same as module.exports = router;
{
    router.get("/", (req, res) => {

        res.render('pages/index', { title: "welcome" })   //using render, getting index page and passing a var title to index.ejs
    });

    // below code to keep routing modular

    router.use('/speakers',speakerRoute(params));
    router.use('/feedback',feedbackRoute(params));

    return router;
}