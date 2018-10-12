require('./config/config')
const path = require('path');
const express = require('express');


var app = express();

app.use(express.static(path.join(__dirname,'/../public')));


app.listen(process.env.PORT, () => {
  console.log(`Server is up on port ${process.env.PORT}`);
});
