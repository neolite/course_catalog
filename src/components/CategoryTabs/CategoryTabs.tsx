import { Category } from '../../types';
import './CategoryTabs.css';

interface CategoryTabsProps {
  categories: Category[];
  selectedCategory: Category | null;
  onSelectCategory: (category: Category | null) => void;
  getCategoryCount: (category: Category | null) => number;
}

export function CategoryTabs({ 
  categories, 
  selectedCategory, 
  onSelectCategory, 
  getCategoryCount 
}: CategoryTabsProps) {
  return (
    <div className="category-tabs" role="tablist" aria-label="Course categories">
      <button
        className={`category-tabs__tab ${selectedCategory === null ? 'category-tabs__tab--active' : ''}`}
        onClick={() => onSelectCategory(null)}
        role="tab"
        aria-selected={selectedCategory === null}
      >
        <span className="category-tabs__label">All</span>
        <span className="category-tabs__count">{getCategoryCount(null)}</span>
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`category-tabs__tab ${selectedCategory === category ? 'category-tabs__tab--active' : ''}`}
          onClick={() => onSelectCategory(category)}
          role="tab"
          aria-selected={selectedCategory === category}
        >
          <span className="category-tabs__label">{category}</span>
          <span className="category-tabs__count">{getCategoryCount(category)}</span>
        </button>
      ))}
    </div>
  );
}

