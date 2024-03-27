// requiring express tool 
const express = require('express');

// create express (backend) app
const app = express();

app.use(express.static(__dirname));

// set a root endpoint fo our app
app.get('/', (req, res) => {
    res.send('ah real monsters!');
});


app.get('/page', (req, res) => {
    res.sendFile('index.html', {root: './'})

});

app.get('/places', (req, res) => {
    res.sendFile('haunted.json', {root: './'})
});

app.listen(2300, () => {console.log('listening on ' + 2300)})