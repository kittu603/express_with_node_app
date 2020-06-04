const express = require('express');
const app = express();

const PORT = 3000;

app.get("/", (req,res) =>{
    res.send("hello Expresssssss :)")
});


app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`)
})

