import styles from './common.module.scss'
import { MdDelete } from 'react-icons/md'
import { useReactFlow } from 'reactflow'

type DeleteNodeProps = {
  nodeId: string
}

export default function DeleteNode({ nodeId }: DeleteNodeProps) {
  const reactFlow = useReactFlow()

  function onDeleteClick() {
    const node = reactFlow.getNode(nodeId)
    if (node) {
      reactFlow.deleteElements({ nodes: [node] })
    }
  }

  return <MdDelete className={styles.icon} onClick={() => onDeleteClick()} />
}
