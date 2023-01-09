import React, { useState } from "react";

const FormHandle = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    pass: "",
    confirmPass: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  function formSubmit(e) {
    e.preventDefault();
    console.log(formData);
  }
  return (
    <>
      <div
        style={{
          width: "400px",
          display: "block",
          margin: "0 auto",
        }}
      >
        <h1>Registration</h1>
        <div>
          <form
            onSubmit={formSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <input
              type="text"
              autoComplete="off"
              name="userName"
              value={formData.userName}
              onChange={handleInput}
            />
            <input
              type="email"
              autoComplete="off"
              name="email"
              value={formData.email}
              onChange={handleInput}
            />
            <input
              type="password"
              autoComplete="off"
              name="pass"
              value={formData.pass}
              onChange={handleInput}
            />
            <input
              type="password"
              autoComplete="off"
              name="confirmPass"
              value={formData.confirmPass}
              onChange={handleInput}
            />
            <button>Submit</button>
          </form>
        </div>

        <div>
          <p>{`Your Name is ${formData.userName} your Email is ${formData.email}`}</p>
        </div>
      </div>
    </>
  );
};

export default FormHandle;
