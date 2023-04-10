import React, { useState } from "react";
import { render } from "react-dom";

const todos = [] = [ "A", "B"]

function App() {
  return (
    <UL 
      className=""
      items={todos}
      itemClick={(item) => alert(item)}
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
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>, 
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>{render(item)}</li>
      ))}
    </ul>
  );
}

export default App;
