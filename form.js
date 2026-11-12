const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            Name: <input type="text" name="name"><br><br>
            Email: <input type="email" name="email"><br><br>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', (req, res) => {
    res.send(
        'Name: ' + req.body.name +
        '<br>Email: ' + req.body.email
    );
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});