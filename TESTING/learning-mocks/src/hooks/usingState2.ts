import { useState } from 'react';

type MyHookWithState2Type = {
  value1: string;
  value2: string;
  action1: (param: string) => void;
  action2: (param: string) => void;
};

function MyHookWithState2(): MyHookWithState2Type {
  const [firstValue, setFirstValue] = useState<string>('');
  const [secondValue, setSecondValue] = useState<string>('');

  function action1(param: string) {
    setFirstValue(param);
  }

  function action2(param: string) {
    setSecondValue(param);
  }

  return {
    value1: firstValue,
    value2: secondValue,
    action1: action1,
    action2: action2,
  };
}

export { MyHookWithState2 };
