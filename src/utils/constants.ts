import { INavButton, ISocialLink } from "./interfaces";

export const SOCIAL_LINKS: Array<ISocialLink> = [
  {
    id: 1,
    icon: "ri:facebook-fill",
    url: "#",
  },
  {
    id: 2,
    icon: "mdi:twitter",
    url: "#",
  },
  {
    id: 3,
    icon: "ph:instagram-logo-fill",
    url: "#",
  },
  {
    id: 4,
    icon: "ri:linkedin-fill",
    url: "#",
  },
];

export const NAV_BUTTONS: Array<INavButton> = [
  {
    id: 1,
    label: "Home",
    sectionId: "hero",
  },
  {
    id: 2,
    label: "About",
    sectionId: "about",
  },
  {
    id: 3,
    label: "Vision",
    sectionId: "vision",
  },
  {
    id: 4,
    label: "Whitepaper",
    sectionId: "whitepaper",
  },
  {
    id: 5,
    label: "Testimonials",
    sectionId: "testimonials",
  },
];
