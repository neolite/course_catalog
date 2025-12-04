import { Course } from '../../types';
import { categoryColors } from '../../data/courses';
import './Card.css';

interface CardProps {
  course: Course;
}

export function Card({ course }: CardProps) {
  const { title, category, price, author, image } = course;
  const badgeColorClass = categoryColors[category];

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img 
          src={image} 
          alt={title} 
          className="card__image"
          loading="lazy"
        />
      </div>
      <div className="card__content">
        <span className={`card__badge ${badgeColorClass}`}>
          {category}
        </span>
        <h3 className="card__title">{title}</h3>
        <div className="card__info">
          <span className="card__price">${price}</span>
          <span className="card__divider" aria-hidden="true"></span>
          <span className="card__author">by {author}</span>
        </div>
      </div>
    </article>
  );
}

