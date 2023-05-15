import React, { useState } from "react";
import './SecondExample.css'

function SecondExample() {
  const [myThings, setMyThings] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, thingType: string) {
    e.dataTransfer.setData("thingType", thingType);
  }

  function handleOnDrop(e: React.DragEvent) {
    const thing = e.dataTransfer.getData("thingType") as string;
    setMyThings([...myThings, thing]);
    console.table(myThings)
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <>
      <div className="App">
        <div className="things">
          <div
            className="thing"
            draggable
            onDragStart={(e) => handleOnDrag(e, "1")}
          >
            1
          </div>
          <div
            className="thing"
            draggable
            onDragStart={(e) => handleOnDrag(e, "2")}
          >
            2
          </div>
          <div
            className="thing"
            draggable
            onDragStart={(e) => handleOnDrag(e, "3")}
          >
            3
          </div>
        </div>
      </div>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {myThings.map((thing, index) => (
          <div className="dropped-thing" key={index}>
            {thing}
          </div>
        ))}
      </div>
    </>
  );
}

export default SecondExample;
