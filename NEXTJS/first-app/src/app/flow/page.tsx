'use client'
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
} from 'reactflow'

export default function FlowPage() {
  return (
    <>
      <ReactFlow>
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </>
  )
}
