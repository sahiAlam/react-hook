import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    document.title = count;
    console.log("useEffect call");
  }, [count]);

  const changeWindowSize = () => {
    setScreenWidth(() => window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", changeWindowSize);
    console.log("resize");
    // cleanup
    return () => {
      window.removeEventListener("resize", changeWindowSize);
    };
  }, [screenWidth]);

  return (
    <>
      <h1>UseEffect Hook</h1>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
      <Button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
        Decrement
      </Button>

      <h2>{`Your Screen Width is ${screenWidth}`}</h2>
    </>
  );
};

export default UseEffect;