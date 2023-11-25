import styles from './add-node.module.scss'
import { MdAdd } from 'react-icons/md'
import { MdDialpad, MdQueueMusic } from 'react-icons/md'
import { useReactFlow } from 'reactflow'
import { NodeTypeNames } from '@/app/flow/nodes/node-types'

type AddNodeProps = {
  nodeId: string
}

export default function AddNode({ nodeId }: AddNodeProps) {
  const reactFlow = useReactFlow()

  function addMenu() {
    const newNode = {
      id: '1',
      position: { x: 100, y: 100 },
      data: { name: 'Support' },
      type: NodeTypeNames.menu,
    }
    const newEdge = {
      id: '1',
      source: '0',
      target: '1',
    }
    reactFlow.addNodes(newNode)
    reactFlow.addEdges(newEdge)
  }

  return (
    <div className={styles.addButtonContainer}>
      <div className={styles.addButton}>
        <MdAdd className={styles.icon} />
      </div>
      <div className={styles.actionContainer} onClick={() => addMenu()}>
        <div className={styles.actionIconContainer}>
          <MdDialpad className={styles.actionIcon} />
        </div>
        <p className={styles.actionLabel}>Menu</p>
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.actionIconContainer}>
          <MdQueueMusic className={styles.actionIcon} />
        </div>
        <p className={styles.actionLabel}>Queue</p>
      </div>
    </div>
  )
}
