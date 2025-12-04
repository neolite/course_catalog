import { Course } from '../../types';
import { Card } from '../Card';
import './CardGrid.css';

interface CardGridProps {
  courses: Course[];
}

export function CardGrid({ courses }: CardGridProps) {
  if (courses.length === 0) {
    return (
      <div className="card-grid__empty">
        <p>No courses found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className="card-grid">
      {courses.map((course) => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

