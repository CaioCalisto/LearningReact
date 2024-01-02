import React from 'react'
import { NodeProps } from 'reactflow'
import styles from '../node.module.scss'
import AddNode from '../../menus/add/add-node'

type MenuOptionProps = {
  option: string
}

function MenuOption({ id, data }: NodeProps<MenuOptionProps>) {
  // TODO: improve this element
  return (
    <div className={styles.buttons}>
      <AddNode parentNodeId={id} />
    </div>
  )
}

export default MenuOption
