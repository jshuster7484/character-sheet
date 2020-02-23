import React, { useState } from "react";

export default function AddItem({ onAdd }) {
  const [name, setName] = useState("");

  const onSubmit = event => {
    event.preventDefault();
    onAdd(name);
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add Item</h3>
      <input
        placeholder="Name"
        onChange={event => setName(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
