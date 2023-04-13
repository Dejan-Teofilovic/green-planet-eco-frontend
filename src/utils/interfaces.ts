export interface ISocialLink {
  id: number;
  icon: string;
  url: string;
}

export interface INavButton {
  id: number;
  label: string;
  sectionId: string;
}

export interface INavLink {
  id: number;
  label: string;
  path?: string;
  children?: Array<INavLink>;
}

export interface ICampaignCardData {
  id: number;
  imgSrc: string;
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
}

export interface IProfileData {
  id: number;
  name: string;
  position: string;
  bio: string;
  imgSrc: string;
  socialLinks: Array<ISocialLink>;
}

export interface ITestimonialData {
  id: number;
  name: string;
  avatarSrc: string;
  position: string;
  comment: string;
}