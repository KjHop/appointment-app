const express = require('express');
const app = express();
const routes = require('./functions/routes.js');
const bodyParser = require('body-parser');
const port = 3030;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
routes(app);

app.listen(port, ()=> console.log(`Listening on port ${port}...`));