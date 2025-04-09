import React, { useCallback, useState } from "react";
// ========================================================================================================================
// Мы хотим что бы дочерний элемент ререндерился только на четных значениях count, как этого добиться не меняя пропсов?
// ========================================================================================================================

export default function ParentElement() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevProps) => ++prevProps);
  }, []);

  return (
    <>
      Parent: {count} <br />
      <SubElement clicker={increment} count={count} />
    </>
  );
}

const SubElement = React.memo(
  ({ clicker, count }) => {
    return (
      <>
        Sub: {count} <br /> <button onClick={clicker}>Increment</button>
      </>
    );
  },
  (prevProp, nextProp) => {
    return nextProp.count % 2 !== 0;
  }
);
