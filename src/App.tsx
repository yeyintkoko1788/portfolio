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

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <WhatIDo />
      <HowIWork />
      <CaseStudies />
      <FeaturedReview />
      <CreativeLab />
      <WorkTogether />
    </div>
  )
}
