import { NodeProps, NodeToolbar } from 'reactflow';
import { useState } from 'react';

type TriggerNodeProps = {
  name: string
}

function TriggerNode({ data }: NodeProps<TriggerNodeProps>) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NodeToolbar isVisible={open}>
        <div>
          <p>toolbar</p>
        </div>
      </NodeToolbar>
      <div onClick={() => setOpen(!open)}>

        <p>{data.name}</p>
      </div>
    </>
  )
}

export default TriggerNode
export type { TriggerNodeProps }
