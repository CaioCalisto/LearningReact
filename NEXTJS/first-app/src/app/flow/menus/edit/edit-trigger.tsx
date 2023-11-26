import styles from './common/common.module.scss'
import { MdOutlineLock } from 'react-icons/md'
import { MdPhoneCallback } from 'react-icons/md'
import RenameNode from '@/app/flow/menus/edit/common/rename-node'
import DeleteNode from '@/app/flow/menus/edit/common/delete-node'

type EditTriggerProps = {
  nodeId: string
}

export default function EditTrigger({ nodeId }: EditTriggerProps) {
  return (
    <div className={styles.menu}>
      <MdOutlineLock className={styles.icon} />
      <hr className={styles.verticalLine} />
      <MdPhoneCallback className={styles.icon} />
      <RenameNode nodeId={nodeId} />
      <hr className={styles.verticalLine} />
      <DeleteNode nodeId={nodeId} />
    </div>
  )
}
