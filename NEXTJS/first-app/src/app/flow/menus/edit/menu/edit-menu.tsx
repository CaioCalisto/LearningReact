import styles from '../common/common.module.scss'
import { MdOutlineLock } from 'react-icons/md'
import RenameNode from '@/app/flow/menus/edit/common/rename-node'
import DeleteNode from '@/app/flow/menus/edit/common/delete-node'
import Options from "@/app/flow/menus/edit/menu/options";

type EditMenuProps = {
  nodeId: string
}

export default function EditMenu({ nodeId }: EditMenuProps) {
  return (
    <div className={styles.menu}>
      <MdOutlineLock className={styles.icon} />
      <hr className={styles.verticalLine} />
      <Options />
      <RenameNode nodeId={nodeId} />
      <hr className={styles.verticalLine} />
      <DeleteNode nodeId={nodeId} />
    </div>
  )
}
