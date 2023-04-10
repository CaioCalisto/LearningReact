import React, { useState } from "react";
import { render } from "react-dom";

const todos = [] = [ "A", "B"]

function App() {
  return (
    <UL 
      items={todos}
      render={(todo) => (
        <>
          {todo}
          <button>Remove</button>
        </>
      )}
    />
  )
}

function UL<T>({
  items,
  render,
}: {
  items: T[];
  render: (item: T) => React.ReactNode;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default App;
