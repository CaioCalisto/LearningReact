import { Handle, NodeProps, NodeToolbar, Position } from 'reactflow'
import { useState } from 'react'
import styles from '../node.module.scss'
import { MdDialpad } from 'react-icons/md'
import EditMenu from '@/app/flow/menus/edit/menu/edit-menu'

type MenuNodeProps = {
  name: string
}

export default function MenuNode({ id, data }: NodeProps<MenuNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Handle type={'target'} position={Position.Top} />
      <NodeToolbar isVisible={open}>
        <EditMenu nodeId={id} />
      </NodeToolbar>
      <div onClick={() => setOpen(!open)} className={styles.node}>
        <div className={styles.icon}>
          <MdDialpad />
        </div>
        <div className={styles.labels}>
          <p className={styles.typeLabel}>Menu</p>
          <p className={styles.nameLabel}>{data.name}</p>
        </div>
      </div>
      <Handle type={'source'} position={Position.Bottom} />
    </>
  )
}
