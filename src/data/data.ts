import ReactIcon from '../assets/stack/react-logo.png'
import NextjsIcon from '../assets/stack/nextjs-logo.png'
import ReduxIcon from '../assets/stack/redux-logo.png'
import TSIcon from '../assets/stack/typescript-logo.png'
import GraphQLIcon from '../assets/stack/graphql-logo.png'

export const icons = [
  { icon: ReactIcon, alt: 'Ícone React' },
  { icon: NextjsIcon, alt: 'Ícone Nextjs' },
  { icon: ReduxIcon, alt: 'Ícone Redux' },
  { icon: TSIcon, alt: 'Ícone Typescript' },
  { icon: GraphQLIcon, alt: 'Ícone GraphQL' },
]

export const resume = [
  {
    company_name: 'Letras.mus',
    company_location: 'Belo Horizonte/MG',
    job_duration: '2022/2023',
    job_title: 'Desenvolvedor Front-end',
    job_description:
      'Aplicações de grande alcance e tráfego, tanto o Letras.mus quanto o Letras.academy e o Ouvir Música. Desenvolvimento de novas funcionalidades utilizando Typescript, Nextjs e React e GraphQL, testando com Jest e documentando com Storybook e Docusaurus. Manutenção e refatoração de código Javascript legado. Automatização de ações no Github e integração com Discord. Rotina de code reviews.',
  },
  {
    company_name: 'Reweb',
    company_location: 'Porto Alegre/RS',
    job_duration: '2019/2022',
    job_title: 'Desenvolvedor Front-end',
    job_description:
      'Websites e landing pages para concessionárias de veículos e para a área médica. Criação e manutenção de templates com Javascript puro, AMP e Sass e integração com CRM. Gestão de tráfego na equipe de front-end.',
  },
]

export const personalProjects = [
  {
    project_name: 'Que presente?',
    project_description:
      'Uma aplicação que utiliza a OpenAI Api para gerar ideias de presentes para familiares e amigos baseado nos seus hobbies. Construido com Vite, React e Typescript e com testes em Cypress.',
    project_website: 'https://que-presente.netlify.app/',
    projetc_repo: 'https://github.com/arthur-dias/whatgift-app',
  },
]
