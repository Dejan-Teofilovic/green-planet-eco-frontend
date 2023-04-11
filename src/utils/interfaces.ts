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
