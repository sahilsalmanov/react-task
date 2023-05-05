import React, { useState } from "react";

function FormApp(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(name, surname);
    setName("");
    setSurname("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Name"
      />
      <input
        type="text"
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        placeholder="Surname"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default FormApp