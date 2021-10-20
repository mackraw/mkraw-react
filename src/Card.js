// import code from './resources/code.svg';

export default function Card() {
  return (
    <div className="card">
      <div className="card-heading">
        <div className="card-img-container">
          <img
            src="./resources/RestauranteItalia.png"
            alt="Screenshot of project Restaurante Italia!"
            className="card-image"
          />
        </div>
        <div className="card-title-section">
          <h4 className="card-title">Restaurante Italia!</h4>
          <div className="card-links">
            <a
              href="https://restaurant.mkraw.com/"
              target="_blank"
              rel="noreferrer"
              className="card-link">
              {/* TODO FIX svg icons */}
              {/* <i className="fa fa-window-maximize" aria-hidden="true"></i> */}
              Visit
            </a>
            <a
              href="https://github.com/mackraw/demo-restaurant"
              target="_blank"
              rel="noreferrer"
              className="card-link">
              {/* <i className="fa fa-code" aria-hidden="true"></i> */}
              Code
            </a>
          </div>
        </div>
      </div>
      <p className="card-desc">
        Multi-page, responsive demo website for a restaurant. Written in vanilla
        JS. Uses geolocation and LocationIQ API to show results for restarants
        based on your location or search.
      </p>
      <div className="card-icons">
        <img src="./resources/html5-bw.svg" alt="HTML5" className="card-icon" />
        <img src="./resources/css3-bw.svg" alt="CSS3" className="card-icon" />
        <img
          src="./resources/js-bw.svg"
          alt="JavaScript"
          className="card-icon"
        />
      </div>
    </div>
  );
}
