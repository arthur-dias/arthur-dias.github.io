import { useTheme } from '../../hooks/useTheme'
import styles from './Switch.module.css'
import { GiMoonBats } from 'react-icons/gi'
import { BsSunFill } from 'react-icons/bs'

const Switch = () => {
  const [theme, handleChange] = useTheme('light')

  return (
    <div className={styles.toggle_switch}>
      <label>
        <input
          type='checkbox'
          onChange={handleChange}
          checked={theme === 'dark'}
        />
        {theme === 'light' ? <GiMoonBats /> : <BsSunFill />}
      </label>
    </div>
  )
}

export default Switch
