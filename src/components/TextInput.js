import React from "react";

function TextInput({ text, onChange }) {
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => onChange(event.target.value, event)}
      />
      <br />
      <p>Echo: {text}</p>
    </div>
  );
}

export default TextInput;
