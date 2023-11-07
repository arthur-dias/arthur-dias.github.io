import { VscGithubAlt, VscLink } from 'react-icons/vsc'
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
              project_website,
              project_repo,
            }: PersonalProjects) => (
              <li className={styles.project} key={project_name}>
                <p>
                  <strong>{project_name}</strong>
                </p>
                <p>{project_description}</p>
                <div className={styles.project__links}>
                  {project_website ? (
                    <a href={project_website} target='_blank' rel='noreferrer'>
                      <VscLink />
                    </a>
                  ) : null}
                  <a href={project_repo} target='_blank' rel='noreferrer'>
                    <VscGithubAlt />
                  </a>
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  )
}

export default PersonalProjects
