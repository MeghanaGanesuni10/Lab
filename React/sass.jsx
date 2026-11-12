import './App.css';
import './App.scss';

function App() {
    const student = {
        name: 'Meghana',
        course: 'CSE',
        age: 20
    };

    return (
        <div className="container">
            <h1>Student Details</h1>
            <p>Name: {student.name}</p>
            <p>Course: {student.course}</p>
            <p>Age: {student.age}</p>
        </div>
    );
}

export default App;

  App.css

    .container {
    text-align: center;
    background-color: lightblue;
    padding: 20px;
}

app.scss

  .container {
    h1 {
        color: blue;
    }

    p {
        color: black;
        font-size: 18px;
    }
}
    
