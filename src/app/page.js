import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Services from '@/components/Services'
import Partners from '@/components/Partners'
import About from '@/components/About'
import Team from '@/components/Team'
import FAQ from '@/components/FAQ'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <Partners />
      <About />
      <Team />
      <FAQ />
      <ContactForm />
      <Footer />
    </main>
  )
}