import { Handle, NodeProps, NodeToolbar, Position } from 'reactflow'
import { useState } from 'react'
import styles from '../node.module.scss'
import { MdQueueMusic } from 'react-icons/md'
import EditQueue from '@/app/flow/menus/edit/queue/edit.queue'

type QueueNodeProps = {
  name: string
}

export default function QueueNode({ id, data }: NodeProps<QueueNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Handle type={'target'} position={Position.Top} />
      <NodeToolbar isVisible={open}>
        <EditQueue nodeId={id} />
      </NodeToolbar>
      <div onClick={() => setOpen(!open)} className={styles.node}>
        <div className={styles.icon}>
          <MdQueueMusic />
        </div>
        <div className={styles.labels}>
          <p className={styles.typeLabel}>Queue</p>
          <p className={styles.nameLabel}>{data.name}</p>
        </div>
      </div>
    </>
  )
}
