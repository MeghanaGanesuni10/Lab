function App() {

    function handleClick() {
        alert("Button Clicked Successfully!");
    }

    return (
        <div>
            <h1>Event Handling</h1>

            <button onClick={handleClick}>
                Click Me
            </button>
        </div>
    );
}

export default App;
