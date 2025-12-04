import { useState, useMemo } from 'react';
import { Category } from '../../types';
import { courses, categories } from '../../data/courses';
import { Header } from '../Header';
import { SearchInput } from '../SearchInput';
import { CategoryTabs } from '../CategoryTabs';
import { CardGrid } from '../CardGrid';
import { LoadMore } from '../LoadMore';
import './CourseCatalog.css';

const ITEMS_PER_PAGE = 9;

export function CourseCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === null || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const visibleCourses = useMemo(() => {
    return filteredCourses.slice(0, visibleCount);
  }, [filteredCourses, visibleCount]);

  const getCategoryCount = (category: Category | null): number => {
    if (category === null) {
      return courses.filter((c) => 
        c.title.toLowerCase().includes(searchQuery.toLowerCase())
      ).length;
    }
    return courses.filter((c) => 
      c.category === category && 
      c.title.toLowerCase().includes(searchQuery.toLowerCase())
    ).length;
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  const hasMore = visibleCount < filteredCourses.length;

  return (
    <main className="course-catalog">
      <Header />
      <section className="course-catalog__content">
        <div className="course-catalog__controls">
          <CategoryTabs
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            getCategoryCount={getCategoryCount}
          />
          <SearchInput
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>
        <CardGrid courses={visibleCourses} />
        {hasMore && (
          <div className="course-catalog__load-more">
            <LoadMore onClick={handleLoadMore} />
          </div>
        )}
      </section>
    </main>
  );
}

