const express = require('express');

const app = express();

app.get('/', (request, response)=>{
    return response.json({
        running: "is running!!"
    })
})

app.listen(process.env.PORT || 3333, ()=>console.log("API running"));