const express = require('express');
const router = express.Router();

module.exports = (params) =>    //exporting this module so that router can be used(returned the same), this is same as module.exports = router;
{
    const speakerService = params.speakerService;   //grab speakerService from params
    
    router.get("/", async (req, res) => {  //routes for speakers/ as / defaults to speakers/ here
        const speakers = await speakerService.getList();  //getting speakers data
        return res.json(speakers)
    });

    //route for spekers detail page i.e, speakers/<name>

    router.get("/:speakerName",(req,res) =>
    {
        return res.send(`Detail page of ${req.params.speakerName} `);
    })


    return router;
}