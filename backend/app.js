const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res)=>{
    res.send('Hello there general kenobi');
})

app.listen(port, ()=> console.log(`Listening on port ${port}...`));