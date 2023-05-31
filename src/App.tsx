import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import PersonalProjects from './components/PersonalProjects/PersonalProjects'
import Presentation from './components/Presentation/Presentation'
import Resume from './components/Resume/Resume'
import Switch from './components/Switch/Switch'

function App() {
  return (
    <div className='container'>
      <Switch />
      <Header />
      <Presentation />
      <Resume />
      <PersonalProjects />
      <Footer />
    </div>
  )
}

export default App
