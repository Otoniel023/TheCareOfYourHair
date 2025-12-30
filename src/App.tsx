import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import HowItWorks from './components/HowItWorks'
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
        <AboutUs />
      </main>
      <Footer />
    </div>
  )
}

export default App
