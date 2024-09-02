"use client";

import { useState } from "react";
import { FirstHook } from './hooks/FirstHook'

export default function Counter() {
  const [count, setCount] = useState(0);
  const randomNumber = FirstHook()

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={() => setCount(count + 1)}>
        +
      </button>
        <p>{randomNumber}</p>
    </>
  );
}
