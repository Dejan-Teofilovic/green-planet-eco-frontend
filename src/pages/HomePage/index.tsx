import React, { lazy, useEffect } from 'react'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import useAffiliate from '../../hooks/useAffililate'
import { QUERY_PARAM_NAME_OF_AFFILIATE_TOKEN } from '../../utils/constants'

// --------------------------------------------------------------------------

const HeroSection = lazy(() => import('./HeroSection'))
const AboutSection = lazy(() => import('./AboutSection'))
const ValuesSection = lazy(() => import('./ValuesSection'))
const VisionSection = lazy(() => import('./VisionSection'))
const WhitepaperSection = lazy(() => import('./WhitepaperSection'))
// const TestimonialsSection = lazy(() => import('./TestimonialsSection'))

// --------------------------------------------------------------------------

export default function HomePage() {
  const [searchParams] = useSearchParams()
  const { setAffiliateTokenAct } = useAffiliate()

  useEffect(() => {
    const affiliateToken = searchParams.get(QUERY_PARAM_NAME_OF_AFFILIATE_TOKEN)
    if (affiliateToken) {
      setAffiliateTokenAct(affiliateToken)
    }
  }, [searchParams])

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