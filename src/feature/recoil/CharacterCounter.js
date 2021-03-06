import { useRecoilValue, useRecoilState } from "recoil";
import CharacterCount from "../../components/CharacterCount";
import TextInput from "../../components/TextInput";
import { default as CharacterCounterUI } from "../../components/CharacterCounter";
import { textState, charCountState } from "./store";

console.log("\n*** RECOIL ***\n");

function CharacterCounter() {
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  return (
    <CharacterCounterUI
      TextInputComponent={
        <TextInput text={text} onChange={(value) => setText(value)} />
      }
      CharacterCountComponent={<CharacterCount count={charCount} />}
    />
  );
}

export default CharacterCounter;
