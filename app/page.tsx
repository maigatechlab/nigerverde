import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Modele from '@/components/Modele'
import Projet from '@/components/Projet'
import Technologie from '@/components/Technologie'
import Drone from '@/components/Drone'
import Stats from '@/components/Stats'
import Cultures from '@/components/Cultures'
import Why from '@/components/Why'
import Marche from '@/components/Marche'
import MissionVision from '@/components/MissionVision'
import Faq from '@/components/Faq'
import FinalCta from '@/components/FinalCta'
import Footer from '@/components/Footer'
import WhatsAppFab from '@/components/WhatsAppFab'

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Intro />
        <Modele />
        <Projet />
        <Technologie />
        <Drone />
        <Stats />
        <Cultures />
        <Why />
        <Marche />
        <MissionVision />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
