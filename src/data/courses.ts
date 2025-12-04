import { Course, Category } from '../types';

export const courses: Course[] = [
  {
    id: '1',
    title: 'The Ultimate Google Ads Training Course',
    category: 'Marketing',
    price: 100,
    author: 'Jerome Bell',
    image: '/images/card-1.png',
  },
  {
    id: '2',
    title: 'Product Management Fundamentals',
    category: 'Management',
    price: 480,
    author: 'Marvin McKinney',
    image: '/images/card-2.png',
  },
  {
    id: '3',
    title: 'HR Management and Analytics',
    category: 'HR & Recruting',
    price: 200,
    author: 'Leslie Alexander Li',
    image: '/images/card-3.png',
  },
  {
    id: '4',
    title: 'Brand Management & PR Communications',
    category: 'Marketing',
    price: 530,
    author: 'Kristin Watson',
    image: '/images/card-4.png',
  },
  {
    id: '5',
    title: 'Graphic Design Basic',
    category: 'Design',
    price: 500,
    author: 'Guy Hawkins',
    image: '/images/card-5.png',
  },
  {
    id: '6',
    title: 'Business Development Management',
    category: 'Management',
    price: 400,
    author: 'Dianne Russell',
    image: '/images/card-6.png',
  },
  {
    id: '7',
    title: 'Highload Software Architecture',
    category: 'Development',
    price: 600,
    author: 'Brooklyn Simmons',
    image: '/images/card-7.png',
  },
  {
    id: '8',
    title: 'Human Resources – Selection and Recruitment',
    category: 'HR & Recruting',
    price: 150,
    author: 'Kathryn Murphy',
    image: '/images/card-8.png',
  },
  {
    id: '9',
    title: 'User Experience. Human-centered Design',
    category: 'Design',
    price: 240,
    author: 'Cody Fisher',
    image: '/images/card-9.png',
  },
];

export const categoryColors: Record<Category, string> = {
  'Marketing': 'bg-success',
  'Management': 'bg-info',
  'HR & Recruting': 'bg-warning',
  'Design': 'bg-design',
  'Development': 'bg-development',
};

export const categories: Category[] = [
  'Marketing',
  'Management',
  'HR & Recruting',
  'Design',
  'Development',
];

