export interface NavItem {
  label: string;
  path?: string;
  type?: 'link' | 'dropdown' | 'mega';
  children?: NavItem[];
}

export interface ServiceData {
  id: string;
  title: string;
  description: string;
  image: string;
}

export enum PageType {
  HOME,
  PRODUCT,
  INFO,
  CONTACT
}