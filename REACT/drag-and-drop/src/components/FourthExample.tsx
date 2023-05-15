import React, { useState } from "react";

function FourthExample() {
  const [firstList, setFirstList] = useState<string[]>(["1", "2", "3"]);

  const [myThings, setMyThings] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, thingType: string) {
    e.dataTransfer.setData("thingType", thingType);
  }

  function handleOnDrop1(e: React.DragEvent) {
    const thing = e.dataTransfer.getData("thingType") as string;
    setFirstList([...firstList, thing]);
    setMyThings(myThings.filter((item) => item != thing));
    console.table(myThings);
  }

  function handleOnDrop2(e: React.DragEvent) {
    const thing = e.dataTransfer.getData("thingType") as string;
    setMyThings([...myThings, thing]);
    setFirstList(firstList.filter((item) => item != thing));
    console.table(myThings);
  }

  function handleDragOver(e: React.DragEvent) {
    e.preventDefault();
  }

  return (
    <>
      <h3>Fourth example</h3>
      <div className="box" onDrop={handleOnDrop1} onDragOver={handleDragOver}>
        {firstList.map((item, index) => (
          <div
            className="thing"
            draggable
            onDragStart={(e) => handleOnDrag(e, item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="box" onDrop={handleOnDrop2} onDragOver={handleDragOver}>
        {myThings.map((thing, index) => (
          <div
            className="dropped-thing"
            draggable
            onDragStart={(e) => handleOnDrag(e, thing)}
          >
            {thing}
          </div>
        ))}
      </div>
    </>
  );
}

export default FourthExample;
