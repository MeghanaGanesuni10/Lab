import { useState } from 'react';

function Student(props) {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Name: {props.name}</h2>
            <h3>Count: {count}</h3>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Props and State Example</h1>
            <Student name="Meghana" />
        </div>
    );
}

export default App;
