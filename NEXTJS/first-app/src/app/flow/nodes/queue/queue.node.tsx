import { Handle, NodeProps, Position } from 'reactflow'
import { useState } from 'react'
import styles from '../node.module.scss'
import { MdQueueMusic } from 'react-icons/md'

type QueueNodeProps = {
  name: string
}

export default function QueueNode({ data }: NodeProps<QueueNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Handle type={'target'} position={Position.Top} />
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
