import { useState } from 'react';

type MyHookWithState3Type = {
  action: () => void;
};

function MyHookWithState3(): MyHookWithState3Type {
  const [something, setSomething] = useState([''])

  function action() {
    setSomething(prev => [...prev, 'A', 'B', 'D', 'C', 'Z'])
  }

  return {
    action,
  };
}

export { MyHookWithState3 }