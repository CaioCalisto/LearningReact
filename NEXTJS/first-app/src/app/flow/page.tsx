'use client'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { NodeTypeNames, NodeTypes } from '@/app/flow/nodes/node-types'

const initialNodes: Node[] = [
  {
    id: '0',
    position: { x: 0, y: 0 },
    data: { name: 'Trigger' },
    type: NodeTypeNames.trigger,
  },
]
const initialEdges: Edge[] = []

export default function FlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  return (
    <>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
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
