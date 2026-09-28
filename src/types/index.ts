export type PageId =
  | 'home'
  | 'about'
  | 'leadership'
  | 'admissions'
  | 'gallery'
  | 'academics'
  | 'fees'
  | 'notices'
  | 'events'
  | 'careers'
  | 'alumni'
  | 'contact'
  | 'downloads';

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  subtext: string;
}

export interface FacilityItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface LeaderItem {
  id: string;
  name: string;
  role: string;
  qualification: string;
  message: string;
  experience: string;
  avatarBg: string;
}

export interface FacultyItem {
  name: string;
  department: string;
  designation: string;
  qualification: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
  badge: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'campus' | 'events' | 'sports' | 'classrooms';
  description: string;
  gradient: string;
  icon: string;
  tags: string[];
}

export interface TestimonialItem {
  id: string;
  name: string;
  relation: string;
  batchOrClass: string;
  content: string;
  rating: number;
}
