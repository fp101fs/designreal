import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Services from './components/Services'
import About from './components/About'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import RecentWork from './components/RecentWork'
import Pricing from './components/Pricing'
import ValueProps from './components/ValueProps'
import FAQ from './components/FAQ'
import BookCall from './components/BookCall'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Services />
      <About />
      <Benefits />
      <Testimonials />
      <RecentWork />
      <Pricing />
      <ValueProps />
      <FAQ />
      <BookCall />
      <Footer />
    </div>
  )
}
