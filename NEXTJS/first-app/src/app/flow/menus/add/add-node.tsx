import styles from './add-node.module.scss'
import { MdAdd } from 'react-icons/md'
import { MdDialpad, MdQueueMusic } from 'react-icons/md'
import { useReactFlow } from 'reactflow'
import { NodeTypeNames } from '@/app/flow/nodes/node-types'
import { v4 as uuidv4 } from 'uuid'

type AddNodeProps = {
  parentNodeId: string
  onNodeAdded: () => void
}

export default function AddNode({ parentNodeId, onNodeAdded }: AddNodeProps) {
  const reactFlow = useReactFlow()

  function addNode(type: 'menu' | 'queue') {
    const newId = uuidv4()
    const newNode = {
      id: newId,
      position: { x: 0, y: 0 },
      data: { name: 'NA' },
      type: type === 'menu' ? NodeTypeNames.menu : NodeTypeNames.queue,
    }
    const newEdge = {
      id: uuidv4(),
      source: parentNodeId,
      target: newId,
    }
    reactFlow.addNodes(newNode)
    reactFlow.addEdges(newEdge)
    onNodeAdded()
  }

  return (
    <div className={styles.addButtonContainer}>
      <div className={styles.addButton}>
        <MdAdd className={styles.icon} />
      </div>
      <div className={styles.actionContainer} onClick={() => addNode('menu')}>
        <div className={styles.actionIconContainer}>
          <MdDialpad className={styles.actionIcon} />
        </div>
        <p className={styles.actionLabel}>Menu</p>
      </div>
      <div className={styles.actionContainer} onClick={() => addNode('queue')}>
        <div className={styles.actionIconContainer}>
          <MdQueueMusic className={styles.actionIcon} />
        </div>
        <p className={styles.actionLabel}>Queue</p>
      </div>
    </div>
  )
}
