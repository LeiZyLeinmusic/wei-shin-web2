export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  categoryTag: string;
  description: string;
  images: string[];
  specs: { label: string; value: string }[];
  material: string;
  applications: string[];
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  images: string[];
  description: string;
  materials: string[]; // List of material names used
  relatedProductSlugs: string[]; // Links to product pages
}

export type ProjectCategory = 
  | 'public' 
  | 'commercial' 
  | 'rail' 
  | 'road-bridge' 
  | 'tunnel' 
  | 'residential' 
  | 'other';

export interface NewsItem {
  id: string;
  slug: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  image: string;
}

export interface InsightItem {
  id: string;
  slug: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  image: string;
}

export const CATEGORY_MAP: Record<ProjectCategory, string> = {
  'public': '公共建設',
  'commercial': '商場辦公',
  'rail': '軌道運輸',
  'road-bridge': '道路橋樑',
  'tunnel': '隧道工程',
  'residential': '集合住宅',
  'other': '其他工程',
};