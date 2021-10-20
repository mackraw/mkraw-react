export default function Nav() {
  return (
    <nav className="hero__nav" id="heroNav">
      <div className="hero__nav__btn-wrapper" id="btnWrapper">
        <div className="hero__nav__btn"></div>
      </div>

      <ul className="menu" id="menu">
        <li className="menu__item">
          <a href="#contact">Contact</a>
        </li>
        <li className="menu__item">
          <a href="#work">Work</a>
        </li>
        <li className="menu__item">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  );
}
