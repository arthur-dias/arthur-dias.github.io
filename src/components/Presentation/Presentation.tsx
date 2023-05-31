import { icons } from '../../data/data'
import styles from './Presentation.module.css'

const Presentation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.presentation}>
        <ul className={styles.stack}>
          {icons.map(({ icon, alt }: { icon: string; alt: string }) => (
            <li key={alt} className={styles.stack__item}>
              <img src={icon} alt={alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Presentation
