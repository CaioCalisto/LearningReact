import styles from './edit-trigger.module.scss'
import { MdOutlineLock } from 'react-icons/md'
import { MdPhoneCallback } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'
import RenameNode from "@/app/flow/menus/edit/common/rename-node";

type EditTriggerProps = {
    nodeId: string
}

export default function EditTrigger({ nodeId } : EditTriggerProps) {
  return (
    <div className={styles.menu}>
      <MdOutlineLock className={styles.icon} />
      <hr className={styles.verticalLine} />
      <MdPhoneCallback className={styles.icon} />
      <RenameNode nodeId={nodeId} />
      <hr className={styles.verticalLine} />
      <MdDelete className={styles.icon} />
    </div>
  )
}
