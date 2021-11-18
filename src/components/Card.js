import { FaCode, FaRegWindowMaximize } from 'react-icons/fa';
import html5Icon from '../assets/images/html5.svg';
import css3Icon from '../assets/images/css3.svg';
import jsIcon from '../assets/images/js.svg';
import restaurantImage from '../assets/images/RestauranteItalia.png';

export default function Card() {
  return (
    <div className="card">
      <div className="card--heading">
        <div className="card--img-container">
          <img
            src={restaurantImage}
            alt="Screenshot of project Restaurante Italia!"
            className="card--image"
          />
        </div>
      </div>
      <div className="card--info">
        <div>
          <h4 className="card--title">Restaurante Italia!</h4>
          <div className="card--links">
            <span>
              <FaRegWindowMaximize />
              <a
                href="https://restaurant.mkraw.com/"
                target="_blank"
                rel="noreferrer"
                className="card--link">
                Visit
              </a>
            </span>
            <span>
              <FaCode />
              <a
                href="https://github.com/mackraw/demo-restaurant"
                target="_blank"
                rel="noreferrer"
                className="card--link">
                Code
              </a>
            </span>
          </div>
        </div>
        <p className="card--desc">
          Multi-page, responsive demo website for a restaurant. Written in
          vanilla JS. Uses geolocation and LocationIQ API to show results for
          restarants based on your location or search.
        </p>
        <div className="card--icons">
          <img src={html5Icon} alt="HTML5" className="card--icon" />
          <img src={css3Icon} alt="CSS3" className="card--icon" />
          <img src={jsIcon} alt="JavaScript" className="card--icon" />
        </div>
      </div>
    </div>
  );
}
