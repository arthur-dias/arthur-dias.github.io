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
    project_name: 'E-commerce dashboard',
    project_description:
      'SPA de um dashboard para e-commerce. Feito com Next.js, com Tailwind e Shadcn/ui. Autenticação feita com Clerk Auth. Tamném utiliza Zustand para gerenciamento de estado. Como banco de dados, utiliza MySQL com Prisma e PlanetScale. Para gerenciamento de imagens utiliza Cloudinary e para pagamentos Stripe. Dentro do dashboard há opção para criação e edição de múltiplas lojas, adicionar, editar e remover banners, categorias, tamanhos, cores e produtos, estes com opções para múltiplas imagens, para marcação como destaque e para arquivamento, e registro de pedidos, todos pesquisáveis. Ainda há opção para troca de tema e gerenciamento de conta. No dashboard é possível visualizar a quantidade de produtos vendidos, o lucro total e o número de produtos cadastrados, tal qual como um gráfico com as vendas mensais. Também disponibiliza as rotas API para acesso externo de cada um dos items. ',
    project_website: 'https://ecomm-admin-six.vercel.app/',
    projetc_repo: 'https://github.com/arthur-dias/ecomm-admin',
  },
  {
    project_name: 'E-commerce loja',
    project_description:
      'Frontend de uma loja de roupas. Feito com Next.js, com Tailwind e Shadcn/ui. Também utiliza Zustand para gerenciamento de estado. Na loja é possível adicionar e demover items do carrinho e filtrar dentro de cada categoria. Também é possível proceder e finalizar o pagamento via Stripe.',
    project_website: 'https://ecomm-store-olive.vercel.app/',
    projetc_repo: 'https://github.com/arthur-dias/ecomm-store',
  },
]
