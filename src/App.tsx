import React from "react";
import { AppContainer } from "./styles/styles";
import { Column } from "./components/Column";
import { AddNewItem } from "./components/AddNewItem";
import { useAppState } from "./state/AppStateContext";
import { CustomDragLayer } from "./components/CustomDragLayer";

function App() {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      <CustomDragLayer />
      {state.lists.map((list, i) => (
        <Column id={list.id} key={list.id} index={i} text={list.text}></Column>
      ))}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}

export default App;
