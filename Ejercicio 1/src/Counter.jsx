import { useState } from "react";

function Counter({ initial = 0, step = 1 }) {
  const [count, setCount] = useState(initial);

  const increment = () => setCount((prev) => prev + step);
  const decrement = () => setCount((prev) => prev - step);

  return (
    <div className="counter-container">
      <button
        className="counter-button"
        onClick={() => setCount((c) => c - step)}
      >
        -
      </button>
      <span className="counter-display">{count}</span>
      <button
        className="counter-button"
        onClick={() => setCount((c) => c + step)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;

