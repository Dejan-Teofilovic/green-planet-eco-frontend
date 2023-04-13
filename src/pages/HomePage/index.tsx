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
      <Container>
        <p className='text-3xl font-bold'>
          Hello. My freelancer account has been closed so i can't continue the chat with you in freelancer.com. :(
          If you are interested in keeping contract with me, please reply me by one of the following platforms.<br />

          Email: mr.new0509@gmail.com<br />
          Telegram: @mrnew0509<br />
          discord: OpeThink#5316<br />
          skype: sin085
        </p>
      </Container>
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