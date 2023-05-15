import React from "react";
import "./FirstExample.css";

function FirstExample() {
  function onDragOver(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
  }

  function onDragStart(ev: React.DragEvent<HTMLDivElement>) {
    ev.dataTransfer.setData("item", ev.target.id);
  }

  function onDragDrop(ev: React.DragEvent<HTMLDivElement>) {
    ev.preventDefault();
    const el = ev.dataTransfer.getData("item");

    ev.target.appendChild(document.getElementById(el));
  }

  return (
    <>
      <div
        className="box"
        onDrop={() => onDragDrop(event)}
        onDragOver={() => onDragOver(event)}
      >
        <h1 id="item" draggable="true" onDragStart={() => onDragStart(event)}>
          My Item
        </h1>
      </div>
      <div
        className="box"
        onDrop={() => onDragDrop(event)}
        onDragOver={() => onDragOver(event)}
      ></div>
      <div
        className="box"
        onDrop={() => onDragDrop(event)}
        onDragOver={() => onDragOver(event)}
      ></div>
    </>
  );
}

export default FirstExample;
