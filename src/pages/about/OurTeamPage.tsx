import React, { lazy } from "react";
import Container from "../../components/Container";
import { IProfileData } from "../../utils/interfaces";
import { SOCIAL_LINKS } from "../../utils/constants";
import ProfileCard from "../../components/ProfileCard";

// -----------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))

// -----------------------------------------------------------------

const PROFILES: Array<IProfileData> = [
  {
    id: 1,
    name: 'Peterson',
    position: 'CEO',
    bio: 'Oisseminate economically sound bandwidth and',
    imgSrc: '/assets/images/profile.jpg',
    socialLinks: SOCIAL_LINKS
  },
  {
    id: 2,
    name: 'Peterson',
    position: 'CTO',
    bio: 'Oisseminate economically sound bandwidth and',
    imgSrc: '/assets/images/profile.jpg',
    socialLinks: SOCIAL_LINKS
  },
  {
    id: 3,
    name: 'Peterson',
    position: 'COO',
    bio: 'Oisseminate economically sound bandwidth and',
    imgSrc: '/assets/images/profile.jpg',
    socialLinks: SOCIAL_LINKS
  },
  {
    id: 4,
    name: 'Peterson',
    position: 'CFO',
    bio: 'Oisseminate economically sound bandwidth and',
    imgSrc: '/assets/images/profile.jpg',
    socialLinks: SOCIAL_LINKS
  },
  {
    id: 5,
    name: 'Peterson',
    position: 'CFO',
    bio: 'Oisseminate economically sound bandwidth and',
    imgSrc: '/assets/images/profile.jpg',
    socialLinks: SOCIAL_LINKS
  },
  {
    id: 6,
    name: 'Peterson',
    position: 'CFO',
    bio: 'Oisseminate economically sound bandwidth and',
    imgSrc: '/assets/images/profile.jpg',
    socialLinks: SOCIAL_LINKS
  },
]

// -----------------------------------------------------------------

export default function OurTeamPage() {
  return (
    <div className="flex flex-col gap-16 md:gap-36 mb-16 md:mb-36">
      <PageTitle title="Our Team" />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROFILES.map(profileItem => (
            <ProfileCard key={profileItem.id} data={profileItem} />
          ))}
        </div>
      </Container>
    </div>
  )
}