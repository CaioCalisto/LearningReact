import Link from 'next/link'
import './sidebar-menu.css'

export default function SidebarMenu() {
  return (
    <>
      <ul>
        <li>
          <Link href={'/'}>
            <p className={'menu'}>Home</p>
          </Link>
        </li>
        <li>
          <Link href={'/flow'}>
            <p className={'menu'}>Flow</p>
          </Link>
        </li>
      </ul>
    </>
  )
}
