import React from "react";

function MyButton() {
  const handleClick = () => {
    alert("you click me!");
  };

  return <button onClick={handleClick}>MyButton</button>;
}

export default MyButton;
