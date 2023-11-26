import styles from './options.module.scss'
import commonStyles from '../common/common.module.scss'
import { MdDialpad } from 'react-icons/md'
import { useState } from 'react'

export default function Options() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <MdDialpad className={commonStyles.icon} onClick={() => setOpen(!open)} />
      {open && (
        <div className={styles.container}>
          <div className={styles.keypadContainer}>
            <div className={styles.keypad}>1</div>
            <div className={styles.keypad}>2</div>
            <div className={styles.keypad}>3</div>
            <div className={styles.keypad}>4</div>
            <div className={styles.keypad}>5</div>
            <div className={styles.keypad}>6</div>
            <div className={styles.keypad}>7</div>
            <div className={styles.keypad}>8</div>
            <div className={styles.keypad}>9</div>
            <div className={styles.keypad}>*</div>
            <div className={styles.keypad}>0</div>
            <div className={styles.keypad}>#</div>
          </div>
        </div>
      )}
    </>
  )
}
