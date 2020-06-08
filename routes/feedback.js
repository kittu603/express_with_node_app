const express = require('express');
const router = express.Router();

module.exports = (params) =>    //exporting this module so that router can be used(returned the same), this is same as module.exports = router;
{
    const feedbackService = params.feedbackService;
    
    router.get("/", async (req, res) => {  //routes for speakers/ as / defaults to speakers/ here
        const feedback = await feedbackService.getList();
        return res.json(feedback)  
    });

    //route for feedback page
    //when form is submitted on /feedback route, this post route is called 

    router.post("/", (req, res) => {
        return res.send(`Detail page of ${req.params.speakerName} `);
    })


    return router;
}