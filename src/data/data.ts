import ReactIcon from '../assets/stack/react-logo.png'
import NextjsIcon from '../assets/stack/nextjs-logo.png'
import JavascriptIcon from '../assets/stack/javascript-logo.png'
import TSIcon from '../assets/stack/typescript-logo.png'
import VueIcon from '../assets/stack/vue-logo.png'

export const icons = [
  { icon: ReactIcon, alt: 'React.js' },
  { icon: NextjsIcon, alt: 'Nextjs' },
  { icon: VueIcon, alt: 'Vue.js' },
  { icon: TSIcon, alt: 'Typescript' },
  { icon: JavascriptIcon, alt: 'Javascript' },
]

export const resume = [
  {
    company_name: 'Letras.mus',
    company_location: 'Belo Horizonte/MG',
    job_duration: '2022/2023',
    job_title: 'Desenvolvedor Front-end',
    job_description:
      'Desenvolvimento de novas funcionalidades com Typescript, Nextjs, GraphQL e Stitches/SASS. Criação de testes unitários e end-to-end com React Testing Library e Jest. Manutenção e refatoração de código legado com Javascript e jQuery. Documentação com Storybook e Docusaurus.',
  },
  {
    company_name: 'Reweb',
    company_location: 'Porto Alegre/RS',
    job_duration: '2019/2022',
    job_title: 'Desenvolvedor Front-end',
    job_description:
      'Criação de sites e landing pages com React, Javascript, AMP, Wordpress e SASS integradas a um CRM. Manutenção de templates Wordpress',
  },
  {
    company_name: 'IFRS - Poalab',
    company_location: 'Porto Alegre/RS',
    job_duration: '2018/2019',
    job_title: 'Bolsista de Iniciação Científica',
    job_description:
      '•	Pesquisa relacionada à plataformas de prototipagem rápida para aprendizagem, inovação e invenção. Configuração e operação de impressoras 3D e máquina de corte à laser. Licitação de materiais. Atendimento à comunidade docente, discente e externa.',
  },
  {
    company_name: 'UFRGS - CPD',
    company_location: 'Porto Alegre/RS',
    job_duration: '2015/2016',
    job_title: 'Bolsista',
    job_description:
      '•	Montagem e manutenção de computadores. Instalação de equipamentos de áudo/tv e periféricos. Atendimento à comunidade docente e discente.',
  },
]

export const personalProjects = [
  {
    project_name: 'Meus Filmes {WIP}',
    project_description:
      'Website para catalogação e reviews de filmes. Utiliza a API do The Movie DataBasa(TMDB). Construido utilizando Vue 3 e Pinia e Supabase com Postgres como banco de dados. Permite que o usuário cire seu cadastro, adicione seus reviews e notas, crie e compartilhe listas de filmes.',
    // project_website: '#',
    project_repo: 'https://github.com/arthur-dias/my-movies',
  },
  {
    project_name: 'E-commerce dashboard',
    project_description:
      'SPA de um dashboard para e-commerce. Feito com Next.js, com Tailwind e Shadcn/ui. Autenticação feita com Clerk Auth. Tamném utiliza Zustand para gerenciamento de estado. Como banco de dados, utiliza MySQL com Prisma e PlanetScale. Para gerenciamento de imagens utiliza Cloudinary e para pagamentos Stripe. Dentro do dashboard há opção para criação e edição de múltiplas lojas, adicionar, editar e remover banners, categorias, tamanhos, cores e produtos, estes com opções para múltiplas imagens, para marcação como destaque e para arquivamento, e registro de pedidos, todos pesquisáveis. Ainda há opção para troca de tema e gerenciamento de conta. No dashboard é possível visualizar a quantidade de produtos vendidos, o lucro total e o número de produtos cadastrados, tal qual como um gráfico com as vendas mensais. Também disponibiliza as rotas API para acesso externo de cada um dos items. ',
    project_website: 'https://ecomm-admin-six.vercel.app/',
    project_repo: 'https://github.com/arthur-dias/ecomm-admin',
  },
  {
    project_name: 'E-commerce loja',
    project_description:
      'Frontend de uma loja de roupas. Feito com Next.js, com Tailwind e Shadcn/ui. Também utiliza Zustand para gerenciamento de estado. Na loja é possível adicionar e demover items do carrinho e filtrar dentro de cada categoria. Também é possível proceder e finalizar o pagamento via Stripe.',
    project_website: 'https://ecomm-store-olive.vercel.app/',
    project_repo: 'https://github.com/arthur-dias/ecomm-store',
  },
]
