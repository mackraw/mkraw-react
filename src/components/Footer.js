import { FaArrowCircleUp } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <FaArrowCircleUp className="backTop hidden" />

      <footer id="footer">
        <div className="footer__top container">
          <ul className="bottom-nav" id="bottomNav">
            <li className="bottom-nav__item">
              <a href="#contact">Contact</a>
            </li>
            <li className="bottom-nav__item">
              <a href="#work">Work</a>
            </li>
            <li className="bottom-nav__item">
              <a href="#about">About</a>
            </li>
          </ul>
          <div className="call-to-action">
            <p>Let's build something great together.</p>
            <a href="mailto:hi@mkraw.com" className="email-link">
              hi@mkraw.com
            </a>
          </div>
        </div>

        <div className="footer__notice">
          <p>&copy; 2021 Mac Krawczyk</p>
        </div>
      </footer>
    </>
  );
}
