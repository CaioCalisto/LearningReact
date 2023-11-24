import styles from './edit-trigger.module.scss'
import { MdOutlineLock } from 'react-icons/md'
import { MdPhoneCallback } from 'react-icons/md'
import { MdEdit } from 'react-icons/md'
import { MdDelete } from 'react-icons/md'

export default function EditTrigger() {
  return (
    <div className={styles.menu}>
      <MdOutlineLock className={styles.icon} />
      <hr className={styles.verticalLine} />
      <MdPhoneCallback className={styles.icon} />
      <MdEdit className={styles.icon} />
      <hr className={styles.verticalLine} />
      <MdDelete className={styles.icon} />
    </div>
  )
}
