import React, { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef(null);

  const handleChange = () => {
    inputRef.current.value = "Your Name: ";
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
  };

  return (
    <>
      <div>
        <input type="text" id="text_input" ref={inputRef} />
        <button onClick={handleChange}>Click Here</button>
      </div>
    </>
  );
};

export default UseRefComponent;
