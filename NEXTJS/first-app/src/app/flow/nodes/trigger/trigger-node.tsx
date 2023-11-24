import { NodeProps, NodeToolbar } from 'reactflow'
import { useState } from 'react'
import styles from './trigger-node.module.css'
import { MdFlashOn } from 'react-icons/md'

type TriggerNodeProps = {
  name: string
}

function TriggerNode({ data }: NodeProps<TriggerNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NodeToolbar isVisible={open}>
        <div>
          <p>toolbar</p>
        </div>
      </NodeToolbar>
      <div onClick={() => setOpen(!open)} className={styles.node}>
        <div className={styles.icon}>
          <MdFlashOn />
        </div>
        <p className={styles.typeLabel}>Trigger</p>
        <p className={styles.nameLabel}>{data.name}</p>
      </div>
    </>
  )
}

export default TriggerNode
export type { TriggerNodeProps }
