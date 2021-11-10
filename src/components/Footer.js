import { FaArrowCircleUp, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <FaArrowCircleUp className="backTop is-hidden" />

      <footer id="footer">
        <div className="footer--top container">
          <ul className="footer--nav" id="bottomNav">
            <li className="footer--nav--item">
              <a className="footer--nav--link" href="#contact">
                Contact
              </a>
            </li>
            <li className="footer--nav--item">
              <a className="footer--nav--link" href="#work">
                Work
              </a>
            </li>
            <li className="footer--nav--item">
              <a className="footer--nav--link" href="#about">
                About
              </a>
            </li>
          </ul>

          <div className="social">
            <span>
              <a
                href="https://github.com/mackraw"
                target="_blank"
                rel="noreferrer"
                className="social--link">
                <FaGithub className="social--img" />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/mac-kraw/"
                target="_blank"
                rel="noreferrer"
                className="social--link">
                <FaLinkedin className="social--img" />
              </a>
            </span>
          </div>
        </div>

        <div className="footer--copy">
          <p>&copy; 2021 Mac Krawczyk</p>
        </div>
      </footer>
    </>
  );
}
