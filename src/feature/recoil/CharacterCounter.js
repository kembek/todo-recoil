import { useRecoilValue, useRecoilState } from "recoil";
import CharacterCount from "../../components/CharacterCount";
import TextInput from "../../components/TextInput";
import { textState, charCountState } from "./store";

function CharacterCounter() {
  const [text, setText] = useRecoilState(textState);
  const charCount = useRecoilValue(charCountState);

  return (
    <div>
      <TextInput
        text={text}
        onChange={(event) => setText(event.target.value)}
      />
      <CharacterCount count={charCount} />
    </div>
  );
}

export default CharacterCounter;
