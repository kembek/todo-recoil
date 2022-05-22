import React from "react";

function CharacterCounter({ TextInputComponent, CharacterCountComponent }) {
  return (
    <div>
      {TextInputComponent}
      {CharacterCountComponent}
    </div>
  );
}

export default CharacterCounter;
