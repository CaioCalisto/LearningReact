import styles from './add-node.module.scss'
import { MdAdd } from 'react-icons/md'
import { MdDialpad } from 'react-icons/md'

export default function AddNode() {
  return (
    <div className={styles.addButtonContainer}>
      <div className={styles.addButton}>
        <MdAdd className={styles.icon} />
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.actionIconContainer}>
          <MdDialpad className={styles.actionIcon} />
        </div>
        <p className={styles.actionLabel}>Menu</p>
      </div>
    </div>
  )
}
