import dynamic from 'next/dynamic'
import TopBar from '@/components/TopBar'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Modele from '@/components/Modele'
import Projet from '@/components/Projet'
import Technologie from '@/components/Technologie'
import Drone from '@/components/Drone'
import Footer from '@/components/Footer'

// Below-fold: split into separate JS chunks → lower TBT
const Stats = dynamic(() => import('@/components/Stats'))
const Cultures = dynamic(() => import('@/components/Cultures'))
const Why = dynamic(() => import('@/components/Why'))
const Marche = dynamic(() => import('@/components/Marche'))
const MissionVision = dynamic(() => import('@/components/MissionVision'))
const Faq = dynamic(() => import('@/components/Faq'))
const FinalCta = dynamic(() => import('@/components/FinalCta'))
const WhatsAppFab = dynamic(() => import('@/components/WhatsAppFab'))

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
