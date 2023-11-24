import { NodeProps } from 'reactflow'

type TriggerNodeProps = {
  name: string
}

function TriggerNode({ data }: NodeProps<TriggerNodeProps>) {
  return (
    <div>
      <p>{data.name}</p>
    </div>
  )
}

export default TriggerNode
export type { TriggerNodeProps }
