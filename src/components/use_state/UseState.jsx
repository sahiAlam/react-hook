import React, { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>UseState Hook</h1>
        <button
          style={{
            margin: "1rem",
            cursor: "pointer",
            padding: "1rem 2rem",
            backgroundColor: "black",
            color: "#fff",
            fontSize: "1rem",
          }}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          style={{
            margin: "1rem",
            cursor: "pointer",
            padding: "1rem 2rem",
            backgroundColor: "red",
            color: "#fff",
            fontSize: "1rem",
          }}
          onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}
        >
          Decrement
        </button>

        <h1
          style={{
            fontSize: "6rem",
          }}
        >
          {count}
        </h1>
      </div>
    </>
  );
};

export default UseState;
