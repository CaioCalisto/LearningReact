import styles from './common/common.module.scss'
import { MdQueueMusic, MdOutlineLock } from 'react-icons/md'
import RenameNode from './common/rename-node'
import DeleteNode from './common/delete-node'

type EditQueueProps = {
  nodeId: string
}

export default function EditQueue({ nodeId }: EditQueueProps) {
  return (
    <div className={styles.menu}>
      <MdOutlineLock className={styles.icon} />
      <hr className={styles.verticalLine} />
      <MdQueueMusic className={styles.icon} />
      <RenameNode nodeId={nodeId} />
      <hr className={styles.verticalLine} />
      <DeleteNode nodeId={nodeId} />
    </div>
  )
}
