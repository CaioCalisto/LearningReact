import styles from './options.module.scss'
import commonStyles from '../common/common.module.scss'
import { MdDialpad } from 'react-icons/md'
import { useState } from 'react'

export default function Options() {
  const [open, setOpen] = useState(false)
  const dialKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#",]

  const dialKeysButtons = () => {
    return dialKeys.map((key: string) => (
        <div key={`dialkey_${key}`} className={styles.keypad} onClick={() => alert('oi')}>{key}</div>
      )      
    )
  }

  return (
    <>
      <MdDialpad className={commonStyles.icon} onClick={() => setOpen(!open)} />
      {open && (
        <div className={styles.container}>
          <div className={styles.keypadContainer}>
            {dialKeysButtons()}
          </div>
        </div>
      )}
    </>
  )
}
