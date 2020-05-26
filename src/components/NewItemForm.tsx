import React, { useState, ChangeEvent } from "react";
import { NewItemFormContainer, NewItemInput, NewItemButton } from "../styles/styles";
import { useFocus } from "../hooks/useFocus";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = ({ onAdd }: NewItemFormProps) => {
  const [text, setText] = useState("");
  const inputRef = useFocus();

  return (
    <NewItemFormContainer>
      <NewItemInput
        ref={inputRef}
        value={text}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setText(e.target.value)}
      />
      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
};
