import Link from 'next/link';

export default function SidebarMenu(){
  return (
    <>
      <ul>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/flow'}>Flow</Link></li>
      </ul>
    </>
  )
}