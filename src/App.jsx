import Nav from './Sections/Nav'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Service from './Sections/Service'
import Testimonial from './Sections/Testimonial'
import Pricing from './Sections/Pricing'
import Contact from './Sections/Contact'
import Footer from './Sections/Footer'

const App = () => {
  return (
    <section className='font-inter'>
      <Nav />
        <Hero />
        <About />
        {/* <Service /> */}
        {/* <Testimonial /> */}
        <Pricing />
        <Contact />
        <Footer />
    </section>
  )
}

export default App