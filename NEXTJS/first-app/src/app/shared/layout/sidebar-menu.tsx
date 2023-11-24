import Link from 'next/link'
import styles from './sidebar-menu.module.scss'

export default function SidebarMenu() {
  return (
    <>
      <ul>
        <li>
          <Link href={'/'}>
            <p className={styles.menu}>Home</p>
          </Link>
        </li>
        <li>
          <Link href={'/flow'}>
            <p className={styles.menu}>Flow</p>
          </Link>
        </li>
      </ul>
    </>
  )
}
