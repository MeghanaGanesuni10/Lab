function App() {
    const students = [
        "Meghana",
        "Ravi",
        "John",
        "David"
    ];

    return (
        <div>
            <h1>Student List</h1>

            <ul>
                {students.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
