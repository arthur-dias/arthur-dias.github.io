import { contactInfo } from '../../data/data'
import styles from './Contact.module.css'

interface ContactInfo {
  name: string
  at: string
  link: string
}
const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <p className={styles.contact__title}>.Contato</p>
        {contactInfo.map(({ name, at, link }: ContactInfo) => (
          <div className={styles.contact__info}>
            <p>{name}</p>
            <a href={link} target='_blank' rel='noreferrer'>
              <p>{at}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact
