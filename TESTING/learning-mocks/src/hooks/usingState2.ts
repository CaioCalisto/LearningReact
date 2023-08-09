import { useState } from 'react';

type MyHookWithState2Type = {
  value1: string;
  value2: string;
  action1: () => void;
  action2: () => void;
};

function MyHookWithState2(): MyHookWithState2Type {
  const [firstValue, setFirstValue] = useState('');
  const [secondtValue, setSecondValue] = useState('');

  function action1() {
    setFirstValue('ABC');
  }

  function action2() {
    setSecondValue('DEF');
  }

  return {
    value1: firstValue,
    value2: secondtValue,
    action1: action1,
    action2: action2,
  };
}

export { MyHookWithState2 };
