import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.header__content}>
          <h1>Arthur Dias</h1>
          <p>Front end dev</p>
        </div>
      </div>
    </div>
  )
}

export default Header
