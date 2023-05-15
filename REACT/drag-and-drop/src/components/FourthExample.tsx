import React, { useState } from "react";

function FourthExample() {
  const [firstList, setFirstList] = useState<string[]>(["1", "2", "3"]);

  const [secondList, setSecondList] = useState<string[]>([]);

  function handleOnDrag(e: React.DragEvent, thingLabel: string) {
    e.dataTransfer.setData("thingLabel", thingLabel);
  }

  function handleOnDrop1(e: React.DragEvent) {
    const thing = e.dataTransfer.getData("thingLabel") as string;
    setFirstList([...firstList, thing]);
    setSecondList(secondList.filter((item) => item != thing));
    console.table(secondList);
  }

  function handleOnDrop2(e: React.DragEvent) {
    const thing = e.dataTransfer.getData("thingLabel") as string;
    setSecondList([...secondList, thing]);
    setFirstList(firstList.filter((item) => item != thing));
    console.table(secondList);
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
            draggable
            onDragStart={(e) => handleOnDrag(e, item)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="box" onDrop={handleOnDrop2} onDragOver={handleDragOver}>
        {secondList.map((thing, index) => (
          <div
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
