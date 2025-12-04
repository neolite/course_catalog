import './LoadMore.css';

interface LoadMoreProps {
  onClick: () => void;
  disabled?: boolean;
}

export function LoadMore({ onClick, disabled = false }: LoadMoreProps) {
  return (
    <button 
      className="load-more" 
      onClick={onClick} 
      disabled={disabled}
      type="button"
    >
      <svg 
        className="load-more__icon" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path 
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M8 12L12 16L16 12" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
        <path 
          d="M12 8V16" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
      <span className="load-more__text">Load more</span>
    </button>
  );
}

