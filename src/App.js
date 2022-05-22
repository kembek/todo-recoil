import "./App.css";
import { atom, useRecoilState, selector, useRecoilValue } from "recoil";

const textState = atom({
  key: "textState",
  default: "",
});

const charCountState = selector({
  key: "charCountState",
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <p>Character count: {count}</p>;
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <br />
      <p>Echo: {text}</p>
    </div>
  );
}

function App() {
  return <CharacterCounter />;
}

export default App;
