import { useState } from 'react';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav
      className={navOpen ? 'hero__nav hero-nav-open' : 'hero__nav'}
      id="heroNav">
      <div
        className="hero__nav__btn-wrapper"
        id="btnWrapper"
        onClick={toggleNav}>
        <div className="hero__nav__btn"></div>
      </div>

      <ul className={navOpen ? 'menu menu-open' : 'menu'} id="menu">
        <li className="menu__item">
          <a href="#contact" className="menu__link">
            Contact
          </a>
        </li>
        <li className="menu__item">
          <a href="#work" className="menu__link">
            Work
          </a>
        </li>
        <li className="menu__item">
          <a href="#about" className="menu__link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
