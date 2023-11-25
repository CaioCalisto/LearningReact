import {Handle, NodeProps, Position} from 'reactflow'
import {useState} from 'react'
import styles from '../node.module.scss'
import {MdDialpad} from 'react-icons/md'
import AddNode from '@/app/flow/menus/add/add-node'

type MenuNodeProps = {
  name: string
}

export default function MenuNode({ id, data }: NodeProps<MenuNodeProps>) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Handle type={'target'} position={Position.Top} />
      <div onClick={() => setOpen(!open)} className={styles.node}>
        <div className={styles.icon}>
          <MdDialpad />
        </div>
        <div className={styles.labels}>
          <p className={styles.typeLabel}>Menu</p>
          <p className={styles.nameLabel}>{data.name}</p>
        </div>
      </div>
      <div className={styles.buttons}>
        <AddNode parentNodeId={id} />
      </div>
        <Handle type={'source'} position={Position.Bottom} />
    </>
  )
}
