import { resume } from '../../data/data'
import styles from './Resume.module.css'

interface Job {
  company_name: string
  company_location: string
  job_duration: string
  job_title: string
  job_description: string
}
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
            }: Job) => (
              <li className={styles.job} key={company_name}>
                <p>{job_duration}</p>
                <div>
                  <p>
                    <strong>{company_name}</strong> - {company_location}
                  </p>
                  <p>
                    <em>{job_title}</em>
                  </p>
                  <p className={styles.job__description}>{job_description}</p>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default Resume
