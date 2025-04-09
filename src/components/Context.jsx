import React, { useContext, createContext } from "react";
const text = createContext("Передал контекст");
const text2 = createContext("Передал контекст2");

const Context = () => {
  return (
    // <text.Provider value="ds">
      <text2.Provider value="513">
        <ContextTest />
      </text2.Provider>
    // </text.Provider>
  );
};

const ContextTest = () => {
  return (
    <div>
      <ContextTestGetData></ContextTestGetData> -
      <ContextTestGetData2></ContextTestGetData2>
    </div>
  );
};

const ContextTestGetData = () => {
  const data = useContext(text);
  console.log(data);
  return <span>{data}</span>;
};

const ContextTestGetData2 = () => {
  const data = useContext(text2);
  console.log(data);
  return <span>{data}</span>;
};

export default Context;
