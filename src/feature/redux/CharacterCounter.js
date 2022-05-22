import { useDispatch, useSelector } from "react-redux";
import CharacterCount from "../../components/CharacterCount";
import TextInput from "../../components/TextInput";
import { default as CharacterCounterUI } from "../../components/CharacterCounter";
import { textEdited } from "./text.slice";

console.log("\n*** REDUX ***\n");

function CharacterCounter() {
  const text = useSelector((state) => state.text.value);
  const charCount = text.length;
  const dispatch = useDispatch();

  return (
    <CharacterCounterUI
      TextInputComponent={
        <TextInput
          text={text}
          onChange={(value) => dispatch(textEdited(value))}
        />
      }
      CharacterCountComponent={<CharacterCount count={charCount} />}
    />
  );
}

export default CharacterCounter;
