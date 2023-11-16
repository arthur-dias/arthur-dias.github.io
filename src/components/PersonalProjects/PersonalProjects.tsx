import { personalProjects } from '../../data/data'
import styles from './PersonalProjects.module.css'

interface PersonalProjects {
  project_name: string
  project_description: string
  project_website?: string
  project_repo: string
}
const PersonalProjects = () => {
  return (
    <div className={styles.container}>
      <div className={styles.personalProjects}>
        <p className={styles.personalProjects__title}>.Projetos pessoais</p>
        <ul className={styles.projects}>
          {personalProjects.map(
            ({
              project_name,
              project_description,
              project_repo,
            }: PersonalProjects) => (
              <li className={styles.project} key={project_name}>
                <a href={project_repo} target='_blank' rel='noreferrer'>
                  <p className={styles.project__title}>{project_name}</p>
                </a>
                <p className={styles.project__description}>
                  {project_description}
                </p>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default PersonalProjects
