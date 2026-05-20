import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  return (
    <div>
      <button onClick={increment}>increment</button>
      <h2>{count}</h2>
      <button onClick={decrement}>decrement</button>
    </div>
  );
};
export default Counter;
