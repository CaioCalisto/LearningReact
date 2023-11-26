import styles from './edit-trigger.module.scss'
import { MdOutlineLock } from 'react-icons/md'
import { MdDialpad } from 'react-icons/md'
import RenameNode from '@/app/flow/menus/edit/common/rename-node'
import DeleteNode from '@/app/flow/menus/edit/common/delete-node'

type EditMenuProps = {
  nodeId: string
}

export default function EditMenu({ nodeId }: EditMenuProps) {
  return (
    <div className={styles.menu}>
      <MdOutlineLock className={styles.icon} />
      <hr className={styles.verticalLine} />
      <MdDialpad className={styles.icon} />
      <RenameNode nodeId={nodeId} />
      <hr className={styles.verticalLine} />
      <DeleteNode nodeId={nodeId} />
    </div>
  )
}
