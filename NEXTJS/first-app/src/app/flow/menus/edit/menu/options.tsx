import styles from './options.module.scss'
import commonStyles from '../common/common.module.scss'
import { MdDialpad } from 'react-icons/md'
import { useState } from 'react'
import { useReactFlow } from 'reactflow'
import { v4 as uuidv4 } from 'uuid'
import { NodeTypeNames } from '@/app/flow/nodes/node-types'

type OptionsProps = {
  nodeId: string
}

export default function Options({ nodeId }: OptionsProps) {
  const reactFlow = useReactFlow()

  const [open, setOpen] = useState(false)
  const dialKeys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#']

  function addOption() {
    const newId = uuidv4()
    const newNode = {
      id: newId,
      position: { x: 0, y: 0 },
      data: { name: 'NA' },
      type: NodeTypeNames.menuOption
    }
    const newEdge = {
      id: uuidv4(),
      source: nodeId,
      target: newId,
    }
    reactFlow.addNodes(newNode)
    reactFlow.addEdges(newEdge)
  }

  const dialKeysButtons = () => {
    return dialKeys.map((key: string) => (
      <div
        key={`dialkey_${key}`}
        className={styles.keypad}
        onClick={() => addOption()}
      >
        {key}
      </div>
    ))
  }

  return (
    <>
      <MdDialpad className={commonStyles.icon} onClick={() => setOpen(!open)} />
      {open && (
        <div className={styles.container}>
          <div className={styles.keypadContainer}>{dialKeysButtons()}</div>
        </div>
      )}
    </>
  )
}
