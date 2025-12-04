import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__background">
        <img 
          src="/images/dots.svg" 
          alt="" 
          className="header__dots" 
          aria-hidden="true"
        />
        <img 
          src="/images/shapes-1.svg" 
          alt="" 
          className="header__shapes-right" 
          aria-hidden="true"
        />
        <img 
          src="/images/shapes-2.svg" 
          alt="" 
          className="header__shapes-left" 
          aria-hidden="true"
        />
      </div>
      <div className="header__content">
        <span className="header__subtitle">Enjoy your studying!</span>
        <h1 className="header__title">Our online courses</h1>
      </div>
    </header>
  );
}

