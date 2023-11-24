'use client'
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';

export default function FlowPage() {
  return (
    <>
      <ReactFlow>
        <Controls position={'bottom-left'} />
        <MiniMap pannable position={'bottom-right'} />
        <Background variant={BackgroundVariant.Lines} gap={12} size={1} />
      </ReactFlow>
    </>
  )
}
