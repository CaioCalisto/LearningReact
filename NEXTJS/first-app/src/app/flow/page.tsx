'use client'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Edge,
  MiniMap,
  Node,
  Panel,
  useEdgesState,
  useNodesState,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { NodeTypeNames, NodeTypes } from '@/app/flow/nodes/node-types'
import { v4 as uuidv4 } from 'uuid'
import { useCallback } from 'react'
import { getLayoutedElements } from '@/app/flow/utils/layout'

const initialNodes: Node[] = [
  {
    id: uuidv4(),
    position: { x: 0, y: 0 },
    data: { name: 'Incoming call' },
    type: NodeTypeNames.trigger,
  },
]
const initialEdges: Edge[] = []

export default function FlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onLayout = useCallback(() => {
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      nodes,
      edges
    )

    setNodes([...layoutedNodes])
    setEdges([...layoutedEdges])
  }, [nodes, edges, setNodes, setEdges])

  return (
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
      <Panel position={'top-right'}>
        <button onClick={() => onLayout()}>Clean Layout</button>
      </Panel>
    </ReactFlow>
  )
}
