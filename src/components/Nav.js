import { useState } from 'react';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => setNavOpen(!navOpen);

  return (
    <nav className={navOpen ? 'nav is-open' : 'nav'} id="heroNav">
      <div className="btn-wrapper" id="btnWrapper" onClick={toggleNav}>
        <div className="nav--btn"></div>
      </div>

      <ul className={navOpen ? 'menu is-open' : 'menu'} id="menu">
        <li className="menu--item">
          <a href="#contact" className="menu--link">
            Contact
          </a>
        </li>
        <li className="menu--item">
          <a href="#work" className="menu--link">
            Work
          </a>
        </li>
        <li className="menu--item">
          <a href="#about" className="menu--link">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
