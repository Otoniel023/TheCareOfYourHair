import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
import Ingredients from './components/Ingredients'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main id="home">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Ingredients />
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
