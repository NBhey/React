import React from "react";
import "./index.css";
import Counter from "./components/Counter";
import CounterFunc from "./components/CounterFunc";
import Context from "./components/Context";
import ParentElement from "./components/ASTON_training/ParentElement";
import CounterFunc2 from "./components/CounterFunc2";

function App() {
  const li1 = <li> text1 </li>;
  const li2 = <li> text2 </li>;
  const li3 = <li> text3 </li>;

  return (
    <>
      <ul>
        {li1} <br />
        {li2} <br />
        {li3} <br />
      </ul>
      <Counter />
      <CounterFunc/>
      <div>-------------------------------</div>
      <Context/>
      <div>-------------------------------</div>
      <ParentElement/>
      <div>-------------------------------</div>
      <CounterFunc2/>
    </>
  );
}
export default App;
