import React, { useState } from "react";

function App() {
  const [fiName, setFiName] = useState("");
  const [seName, setSename] = useState("");
  const [headingName, setHeadingName] = useState("");

  function handleFiChange(event) {
    setFiName(event.target.value);
  }

  function handleSechange(event) {
    setSename(event.target.value);
  }
  function handleClick(event) {
    setHeadingName(fiName + " " + seName);

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {headingName}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleFiChange}
          name="fName"
          placeholder="First Name"
        />
        <input onChange={handleSechange} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
