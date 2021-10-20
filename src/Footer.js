export default function Footer() {
  return (
    <>
      <button className="backTop hidden">&uparrow;</button>

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

// TODO THIS DOESNT WORK -- FIX IT
// https://dev.to/n8tb1t/tracking-scroll-position-with-react-hooks-3bbj
export function handleScroll() {
  let midScreen = window.screen.availHeight / 2;
  let bottomThird = (window.screen.availHeight / 3) * 2;
  const backTop = document.querySelector('.backTop');
  if (window.scrollY >= midScreen) {
    console.log(backTop);
    backTop.classNameList.remove('hidden');
    backTop.addEventListener('click', () => {
      window.scroll({ top: 0, behavior: 'smooth' });
    });
  }
  if (window.scrollY < bottomThird) {
    backTop.classNameList.add('hidden');
  }
}
