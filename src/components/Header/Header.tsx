import styles from './Header.module.css'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Avatar from '../../assets/personal/avatar.jpg'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img src={Avatar} alt='Avatar' />
        <div className={styles.header__content}>
          <p>Arthur Dias - Dev Front-end</p>
          <div className={styles.icons}>
            <a
              href='https://github.com/arthur-dias/'
              target='_blank'
              rel='noreferrer'>
              <AiFillGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/arthur-dias1/'
              target='_blank'
              rel='noreferrer'>
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
