import React, { useState } from "react";
import "./ThirdExample.css";

function ThirdExample() {
  const [firstList, setFirstList] = useState<string[]>(["1", "2", "3"])

  const [myThings, setMyThings] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, thingType: string) {
    e.dataTransfer.setData("thingType", thingType);
  }

  function handleOnDrop(e: React.DragEvent) {
    const thing = e.dataTransfer.getData("thingType") as string;
    setMyThings([...myThings, thing]);
    setFirstList(firstList.filter(item => item != thing))
    console.table(myThings);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <>
      <h3>Third example</h3>
      <div className="App">
        <div className="things">
          {firstList.map((item, index) => (
            <div className="thing" draggable onDragStart={(e) => handleOnDrag(e, item)}>{item}</div>
          ))}
        </div>
      </div>
      <div className="page" onDrop={handleOnDrop} onDragOver={handleDragOver}>
        {myThings.map((thing, index) => (
          <div className="dropped-thing">
            {thing}
          </div>
        ))}
      </div>
    </>
  );
}

export default ThirdExample;
