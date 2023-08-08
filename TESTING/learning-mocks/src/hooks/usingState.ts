import { useState } from "react";

type MyHookWithState1Type = {
  value: string;
  changeValue: () => void
};

function MyHookWithState(): MyHookWithState1Type {
  const [value, setValue] = useState('caio')

  function changeValue() {
    setValue('natalia')
  }

  return { value, changeValue };
}

export { MyHookWithState };
