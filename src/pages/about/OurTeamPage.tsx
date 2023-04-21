import React, { lazy } from "react";
import Container from "../../components/Container";
import { IProfileData } from "../../utils/interfaces";
import { PROFILES, SOCIAL_LINKS } from "../../utils/constants";
import ProfileCard from "../../components/ProfileCard";

// -----------------------------------------------------------------

const PageTitle = lazy(() => import('../../components/PageTitle'))

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