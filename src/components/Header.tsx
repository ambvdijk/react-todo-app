import { ChangeEvent, useState, KeyboardEvent } from "react";
import { Store } from "../store/";
import { add } from "../store/features/todo/state";


export function Header(): JSX.Element {
  const [text, setText] = useState("");
  const dispatch = Store.useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setText(e.target.value);

  const handleKeyDown = (e: KeyboardEvent) => {
    // If the user pressed the Enter key:
    const trimmedText = text.trim();
    if (e.which === 13 && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch(add(trimmedText));
      // And clear out the text input
      setText("");
    }
  };

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
}
