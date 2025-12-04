import { Course } from '../../types';
import { categoryColors } from '../../data/courses';
import './Card.css';

interface CardProps {
  course: Course;
}

export function Card({ course }: CardProps) {
  const { title, category, price, author, image } = course;
  const badgeColorClass = categoryColors[category];

  // Generate srcset for retina displays
  const basePath = image.replace('.png', '');
  const srcSet = `${basePath}.png 1x, ${basePath}-2x.png 2x, ${basePath}-3x.png 3x`;

  return (
    <article className="card">
      <div className="card__image-wrapper">
        <img
          src={image}
          srcSet={srcSet}
          alt={title}
          className="card__image"
          loading="lazy"
          width={390}
          height={240}
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

