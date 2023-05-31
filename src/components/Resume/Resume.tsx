import { resume } from '../../data/data'
import styles from './Resume.module.css'
const Resume = () => {
  return (
    <div className={styles.container}>
      <div className={styles.resume}>
        <p className={styles.resume__title}>.Trabalho</p>
        <ul className={styles.jobs}>
          {resume.map(
            ({
              company_name,
              company_location,
              job_duration,
              job_title,
              job_description,
            }: {
              company_name: string
              company_location: string
              job_duration: string
              job_title: string
              job_description: string
            }) => (
              <li className={styles.job} key={company_name}>
                <p>
                  <strong>{company_name}</strong> - {company_location} -{' '}
                  {job_duration}
                </p>
                <p>{job_title}</p>
                <p>{job_description}</p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Resume
