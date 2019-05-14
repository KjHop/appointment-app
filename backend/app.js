const express = require('express');
const app = express();
const routes = require('./functions/routes.js');
const port = 3030;

routes(app);

app.listen(port, ()=> console.log(`Listening on port ${port}...`));