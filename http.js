const express = require('express');
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: 'John' },
    { id: 2, name: 'David' }
];

// Accept data - POST
app.post('/students', (req, res) => {
    students.push(req.body);
    res.send('Student Added Successfully');
});

// Retrieve data - GET
app.get('/students', (req, res) => {
    res.json(students);
});

// Delete data - DELETE
app.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);

    students = students.filter(s => s.id !== id);

    res.send('Student Deleted Successfully');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});