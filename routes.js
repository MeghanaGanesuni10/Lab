const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to ExpressJS');
});

// Route handling
app.get('/about', (req, res) => {
    res.send('This is About Page');
});

// Route parameter
app.get('/user/:id', (req, res) => {
    res.send('User ID: ' + req.params.id);
});

// Query parameter
app.get('/search', (req, res) => {
    res.send('Search: ' + req.query.name);
});

// URL building
app.get('/product/:id', (req, res) => {
    const url = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send('Generated URL: ' + url);
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});