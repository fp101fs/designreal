import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import LogoStrip from './components/LogoStrip'
import About from './components/About'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import RecentWork from './components/RecentWork'
import Pricing from './components/Pricing'
import ValueProps from './components/ValueProps'
import LogoStripBottom from './components/LogoStrip'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-page text-black min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <LogoStrip />
      <About />
      <Benefits />
      <Testimonials />
      <RecentWork />
      <Pricing />
      <ValueProps />
      <LogoStripBottom />
      <FAQ />
      <Footer />
    </div>
  )
}
