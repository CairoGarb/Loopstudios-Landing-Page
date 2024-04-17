import { Creations } from './components/Creations'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Leader } from './components/Leader'

export const App = () => {
  return (
    <div>
      <Header />
      <Leader />
      <Creations />
      <Footer />
    </div>
  )
}
