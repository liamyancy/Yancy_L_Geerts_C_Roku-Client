const express = require('express');
const path = require('path');
const hbs = require('hbs');
// proxy stuff goes here

const app = express();

const port = process.env.PORT || 5000;

app.set('views' , path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//registering partials
hbs.registerPartials(__dirname + '/views/templates');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`app is running on ${port}`);

})