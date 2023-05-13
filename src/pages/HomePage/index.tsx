import React, { lazy, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAffiliate from '../../hooks/useAffililate'

// --------------------------------------------------------------------------

const HeroSection = lazy(() => import('./HeroSection'))
const AboutSection = lazy(() => import('./AboutSection'))
const ValuesSection = lazy(() => import('./ValuesSection'))
const VisionSection = lazy(() => import('./VisionSection'))
const WhitepaperSection = lazy(() => import('./WhitepaperSection'))
// const TestimonialsSection = lazy(() => import('./TestimonialsSection'))

// --------------------------------------------------------------------------

export default function HomePage() {
  const { affiliateToken } = useParams()
  const { setAffiliateTokenAct } = useAffiliate()

  useEffect(() => {
    if (affiliateToken) {
      setAffiliateTokenAct(affiliateToken)
    }
  }, [affiliateToken])

  return (
    <div className="flex flex-col gap-16 md:gap-36">
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <VisionSection />
      <div>
        <WhitepaperSection />
        {/* <TestimonialsSection /> */}
      </div>
    </div>
  )
}