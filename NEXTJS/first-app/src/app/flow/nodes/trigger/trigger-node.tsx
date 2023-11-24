import { NodeProps, NodeToolbar } from 'reactflow'
import { useState } from 'react'
import styles from './trigger-node.module.scss'
import { MdFlashOn } from 'react-icons/md'
import EditTrigger from '@/app/flow/menus/edit/edit-trigger';

type TriggerNodeProps = {
  name: string
}

function TriggerNode({ data }: NodeProps<TriggerNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NodeToolbar isVisible={open}>
        <EditTrigger />
      </NodeToolbar>
      <div onClick={() => setOpen(!open)} className={styles.node}>
        <div className={styles.icon}>
          <MdFlashOn />
        </div>
        <div className={styles.labels}>
          <p className={styles.typeLabel}>Trigger</p>
          <p className={styles.nameLabel}>{data.name}</p>
        </div>
      </div>
    </>
  )
}

export default TriggerNode
export type { TriggerNodeProps }
