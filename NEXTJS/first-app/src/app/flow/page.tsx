'use client'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { NodeTypeNames, NodeTypes } from '@/app/flow/nodes/NodeTypes';

const initialNodes: Node[] = [
  {
    id: '0',
    position: { x: 0, y: 0 },
    data: { name: 'Trigger' },
    type: NodeTypeNames.trigger
  },
]
const initialEdges: Edge[] = []

export default function FlowPage() {
  return (
    <>
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={NodeTypes}
        fitView={true}
      >
        <Controls position={'bottom-left'} />
        <MiniMap pannable position={'bottom-right'} />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </>
  )
}
