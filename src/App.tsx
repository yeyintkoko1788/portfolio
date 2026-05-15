import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import WhatIDo from './components/WhatIDo'
import HowIWork from './components/HowIWork'
import CaseStudies from './components/CaseStudies'
import FeaturedReview from './components/FeaturedReview'
import CreativeLab from './components/CreativeLab'
import WorkTogether from './components/WorkTogether'
import YangonDelightDetail from './components/YangonDelightDetail'
import NewYangonDelightDetail from './components/NewYangonDelightDetail'
import FabricDecodeDetail from './components/FabricDecodeDetail'
import BookCoverDetail from './components/BookCoverDetail'
import NewNavbar from './components/NewNavbar'
import NewHero from './components/NewHero'
import NewAboutMe from './components/NewAboutMe'
import NewWhatIDo from './components/NewWhatIDo'
import NewHowIWork from './components/NewHowIWork'
import NewProjects from './components/NewProjects'
import NewFeaturedReview from './components/NewFeaturedReview'
import NewCreativeLab from './components/NewCreativeLab'
import NewWorkTogether from './components/NewWorkTogether'
import FloatingAvailability from './components/FloatingAvailability'
import BackToTop from './components/BackToTop'
import NewAdidasDetail from './components/NewAdidasDetail'
import NewFabricDecodeDetail from './components/NewFabricDecodeDetail'
import NewVeraDetail from './components/NewVeraDetail'
import NewBookCoverDetail from './components/NewBookCoverDetail'
import NewEmailDetail from './components/NewEmailDetail'
import NewKarotteDetail from './components/NewKarotteDetail'
import NewPostersDetail from './components/NewPostersDetail'
import NewPaintingDetail from './components/NewPaintingDetail'
import NewProcessDetail from './components/NewProcessDetail'
import NewInteractionsDetail from './components/NewInteractionsDetail'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.slice(1))
        if (el) el.scrollIntoView({ behavior: 'smooth' })
        else window.scrollTo(0, 0)
      }, 50)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])
  return null
}

function HomeV1() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <WhatIDo />
      <HowIWork />
      <CaseStudies />
      <FeaturedReview />
      <CreativeLab />
      <WorkTogether />
    </>
  )
}

function Home() {
  return (
    <div className="bg-[#F0E8D4] min-h-screen">
      <NewNavbar />
      <NewHero />
      <NewAboutMe />
      <NewWhatIDo />
      <NewHowIWork />
      <NewProjects />
      <NewFeaturedReview />
      <NewCreativeLab />
      <NewWorkTogether />
      <FloatingAvailability />
      <BackToTop />
    </div>
  )
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/v1" element={<HomeV1 />} />
        <Route path="/projects/yangon-delight" element={<NewYangonDelightDetail />} />
        <Route path="/v1/projects/yangon-delight" element={<><Navbar /><YangonDelightDetail /></>} />
        <Route path="/projects/fabric-decode" element={<NewFabricDecodeDetail />} />
        <Route path="/projects/book-cover" element={<NewBookCoverDetail />} />
        <Route path="/projects/adidas-korea" element={<NewAdidasDetail />} />
        <Route path="/projects/vera" element={<NewVeraDetail />} />
        <Route path="/projects/email-redesign" element={<NewEmailDetail />} />
        <Route path="/projects/karotte" element={<NewKarotteDetail />} />
        <Route path="/lab/posters" element={<NewPostersDetail />} />
        <Route path="/lab/painting" element={<NewPaintingDetail />} />
        <Route path="/lab/process" element={<NewProcessDetail />} />
        <Route path="/lab/interactions" element={<NewInteractionsDetail />} />
      </Routes>
    </>
  )
}
