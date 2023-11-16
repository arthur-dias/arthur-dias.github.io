import Switch from './components/Switch/Switch'
import Header from './components/Header/Header'
import Contact from './components/Contact/Contact'
import Resume from './components/Resume/Resume'
import PersonalProjects from './components/PersonalProjects/PersonalProjects'

function App() {
  return (
    <div className='container'>
      <Switch />
      <Header />
      <Contact />
      <Resume />
      <PersonalProjects />
    </div>
  )
}

export default App
