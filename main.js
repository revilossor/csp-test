const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, './static')));

app.listen('8000', () => { console.log('app listening on port ' + 8000); });
