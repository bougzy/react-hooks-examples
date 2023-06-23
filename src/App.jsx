import  { useState, useEffect, useReducer, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 


const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function App() {
  // useState example
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // useEffect example
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // useReducer example
  const [state, dispatch] = useReducer(reducer, initialState);

  // useMemo example
  const [fruits, setFruits] = useState(["apple", "banana", "orange"]);
  const filteredFruits = useMemo(() => {
    return fruits.filter((fruit) => {
      return fruit.toLowerCase().includes(inputValue.toLowerCase());
    });
  }, [fruits, inputValue]);

  return (
    <div className="container">
      <h1>React Hooks Example</h1>
      <hr />

      {/* useState example */}
      <h2>useState Example</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <p>Input Value: {inputValue}</p>
      <hr />

      {/* useEffect example */}
      <h2>useEffect Example</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
      <hr />

      {/* useReducer example */}
      <h2>useReducer Example</h2>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <hr />

      {/* useMemo example */}
      <h2>useMemo Example</h2>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {filteredFruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      {/* Bootstrap Carousel */}
      
    </div>
  );
}

export default App;
