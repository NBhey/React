import React, { useState } from "react";

const CounterFunc = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevcount) => {
     return prevcount + 1; 
      
    });
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
};

export default CounterFunc;
