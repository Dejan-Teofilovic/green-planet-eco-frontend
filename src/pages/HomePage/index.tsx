import React, { lazy } from 'react'
import Container from '../../components/Container'

// --------------------------------------------------------------------------

const HeroSection = lazy(() => import('./HeroSection'))
const AboutSection = lazy(() => import('./AboutSection'))
const ValuesSection = lazy(() => import('./ValuesSection'))
const VisionSection = lazy(() => import('./VisionSection'))
const WhitepaperSection = lazy(() => import('./WhitepaperSection'))
const TestimonialsSection = lazy(() => import('./TestimonialsSection'))

// --------------------------------------------------------------------------

export default function HomePage() {
  return (
    <div className="flex flex-col gap-16 md:gap-36">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <VisionSection />
      <div>
        <WhitepaperSection />
        <TestimonialsSection />
      </div>
    </div>
  )
}