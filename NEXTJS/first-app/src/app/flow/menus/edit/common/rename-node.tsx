import styles from '@/app/flow/menus/edit/common/common.module.scss'
import styles2 from './rename-node.module.scss'
import { MdEdit } from 'react-icons/md'
import { useState } from 'react'
import { useReactFlow } from 'reactflow'

type RenameNodeProps = {
  nodeId: string
}

export default function RenameNode({ nodeId }: RenameNodeProps) {
  const [open, setOpen] = useState(false)
  const reactFlow = useReactFlow()
  const node = reactFlow.getNode(nodeId)

  function handleChange(event) {
    if (node) {
      node.data.name = event.target.value
    }
  }

  return (
    <>
      <MdEdit className={styles.icon} onClick={() => setOpen(!open)} />
      {open && (
        <>
          <div className={styles2.container}>
            <p>Rename node</p>
            <input type={'text'} onChange={handleChange} />
          </div>
        </>
      )}
    </>
  )
}
