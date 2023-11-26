import {
  Handle,
  NodeProps,
  NodeToolbar,
  Position, useEdges,
} from 'reactflow'
import {useEffect, useState} from 'react'
import styles from '../node.module.scss'
import { MdFlashOn } from 'react-icons/md'
import EditTrigger from '@/app/flow/menus/edit/trigger/edit-trigger'
import AddNode from '@/app/flow/menus/add/add-node'

type TriggerNodeProps = {
  name: string
}

function TriggerNode({ id, data }: NodeProps<TriggerNodeProps>) {
  const [open, setOpen] = useState(false)
  const [showAddButton, setShowAddButton] = useState(true)
  const edges = useEdges()

  useEffect(() => {
    const edge = edges.find((edge) => edge.source === id)
    if (edge) {
      setShowAddButton(false)
    } else {
      setShowAddButton(true)
    }
  }, [edges])

  return (
    <>
      <NodeToolbar isVisible={open}>
        <EditTrigger nodeId={id} />
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
      {showAddButton && (
        <div className={styles.buttons}>
          <AddNode parentNodeId={id} />
        </div>
      )}
      {!showAddButton && <Handle type={'source'} position={Position.Bottom} />}
    </>
  )
}

export default TriggerNode
export type { TriggerNodeProps }
