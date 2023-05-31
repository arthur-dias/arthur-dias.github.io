import styles from './Footer.module.css'
import { FaGithubAlt } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p>Feito por</p>
        <a
          href='https://github.com/arthur-dias/'
          target='_blank'
          rel='noreferrer'>
          <FaGithubAlt />
        </a>
      </div>
    </div>
  )
}

export default Footer
