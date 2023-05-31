import { useState } from "react";
import "./App.css";
import MyButton from "./components/MyButton";
import MyProfile from "./components/MyProfile";

function App() {
  const [count, setCount] = useState(0);

  const user = {
    fName: "react",
    lName: "practice",
  };

  const product = [
    {
      title: "red",
      id: 1,
    },
    {
      title: "blue",
      id: 2,
    },
    {
      title: "green",
      id: 3,
    },
  ];

  const addCount = () => {
    setCount(count + 1);
  };
  const removeCount = () => {
    setCount(count - 1);
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    // React Fragments
    <>
      <div className="App">
        <h1>Welcome to my practice react 01</h1>
        <MyProfile data={user} />
        <p> {count} </p>
        <div>
          <button onClick={addCount}>Add More Count</button>
        </div>
        <div>
          <button onClick={removeCount}>Remove Count</button>
        </div>
        <div>
          <button onClick={resetCount}>Reset Count</button>
        </div>
        <div>
          <ul>
            {/** render list  */}
            {product.map((i) => {
              return <li key={i.id}>{i.title}</li>;
            })}
          </ul>
        </div>
        <MyButton />
      </div>
    </>
  );
}

export default App;
