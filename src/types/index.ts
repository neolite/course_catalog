export type Category = 
  | 'Marketing'
  | 'Management'
  | 'HR & Recruting'
  | 'Design'
  | 'Development';

export interface Course {
  id: string;
  title: string;
  category: Category;
  price: number;
  author: string;
  image: string;
}

export interface CategoryInfo {
  name: Category;
  color: string;
  count: number;
}

