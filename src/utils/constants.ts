import { INavButton, INavLink, IServiceData, ISocialLink } from "./interfaces";

export const SOCIAL_LINKS: Array<ISocialLink> = [
  {
    id: 1,
    icon: "ri:facebook-fill",
    url: "#"
  },
  {
    id: 2,
    icon: "mdi:twitter",
    url: "#"
  },
  {
    id: 3,
    icon: "ph:instagram-logo-fill",
    url: "#"
  },
  {
    id: 4,
    icon: "ri:linkedin-fill",
    url: "#"
  }
];

export const NAV_BUTTONS: Array<INavButton> = [
  {
    id: 1,
    label: "Home",
    sectionId: "hero"
  },
  {
    id: 2,
    label: "About",
    sectionId: "about"
  },
  {
    id: 3,
    label: "Vision",
    sectionId: "vision"
  },
  {
    id: 4,
    label: "Whitepaper",
    sectionId: "whitepaper"
  },
  {
    id: 5,
    label: "Testimonials",
    sectionId: "testimonials"
  }
];

export const NAV_LINKS: Array<INavLink> = [
  {
    id: 1,
    label: "Home",
    path: "/"
  },
  {
    id: 2,
    label: "About",
    children: [
      {
        id: 1,
        label: "Campaigns",
        path: "/about/campaigns"
      },
      {
        id: 2,
        label: "Who we are",
        path: "/about/who-we-are"
      },
      {
        id: 3,
        label: "Company History",
        path: "/about/company-history"
      },
      {
        id: 4,
        label: "Our Team",
        path: "/about/our-team"
      },
      {
        id: 5,
        label: "Testimonials",
        path: "/about/testimonials"
      },
      {
        id: 6,
        label: "Faq",
        path: "/about/faq"
      }
    ]
  },
  {
    id: 3,
    label: "Learn",
    path: "/learn"
  },
  {
    id: 4,
    label: "Events",
    path: "/events"
  },
  {
    id: 5,
    label: "Portfolio",
    path: "/portfolio"
  },
  {
    id: 6,
    label: "News",
    path: "/news"
  },
  {
    id: 7,
    label: "Contact us",
    path: "/contact-us"
  }
];

export const SERVICES: Array<IServiceData> = [
  {
    id: 1,
    title: "Supporting Cause",
    description:
      "Your contribution used locally to help charitable causes and support the organization, Support.",
    imgSrc: "/assets/images/who_we_are_donate.png"
  },
  {
    id: 2,
    title: "Most Trusted One",
    description:
      "Your contribution used locally to help charitable causes and support the organization, Support.",
    imgSrc: "/assets/images/who_we_are_medal.png"
  },
  {
    id: 3,
    title: "Award Winners",
    description:
      "Your contribution used locally to help charitable causes and support the organization, Support.",
    imgSrc: "/assets/images/who_we_are_torch.png"
  }
];

export const MSG_REQUIRED_FIELD = "Required field.";
