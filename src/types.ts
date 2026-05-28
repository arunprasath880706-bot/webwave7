export interface Job {
  id: string;
  title: string;
  tag: string;
  tagColorClass: string; // 'tech' | 'art' | 'internship' | 'guidance' | 'development'
  img: string;
  desc: string;
  slogan: string;
  link: string;
  label: string;
  details: string[];
  highlights: string[];
}

export interface WhatsAppGroup {
  id: string;
  name: string;
  description: string;
  lastMessage: string;
  date: string;
  unreadCount?: number;
  avatarLetter: string;
  avatarColorClass: string;
  link: string;
}

export type ActiveTab = 'landing' | 'jobs' | 'community' | 'flyer';
