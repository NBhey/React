import { useState } from "react";

export default function CounterFunc2() {
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    setCount(count+1);
    setCount(count+1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    
  };
  return (
    <div>
      <p>{count}</p>
      <button onClick={handlerClick}>+1</button>
    </div>
  );
}
