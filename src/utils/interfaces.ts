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
  isLinkToOutside?: boolean;
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

export interface IFaqData {
  id: number;
  question: string;
  answer: string;
}

export interface IServiceData {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
}

export interface IBenefitOfLearn {
  id: number;
  title: string;
  description: string;
}

export interface ILearnData {
  id: number;
  title: string;
  description: string;
  benefits: Array<IBenefitOfLearn>;
  imgSrc: string;
}

export interface INewsData {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  postedAt: Date;
}

export interface IResponse {
  status: number;
  [key: string]: any;
}

export interface IImage {
  id: number;
  imgSrc: string;
}
