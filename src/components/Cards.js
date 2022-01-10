import { FaCode, FaRegWindowMaximize } from 'react-icons/fa';
import data from '../assets/projects';

export default function Cards() {
  const projects = data.map((item, index) => (
    <div className="card" key={index}>
      <div className="card--heading">
        <div className="card--img-container">
          <a href={item.link}>
            <img src={item.image} alt={item.imageAlt} className="card--image" />
          </a>
        </div>
      </div>
      <div className="card--info">
        <div>
          <h4 className="card--title">
            <a href={item.link} className="card--title--link">
              {item.title}
            </a>
          </h4>
        </div>
        <p className="card--desc">{item.description}</p>
        <div className="card--links">
          <span className="card--link">
            <FaRegWindowMaximize />
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="card--link--text">
              Visit
            </a>
          </span>
          <span className="card--link">
            <FaCode />
            <a
              href={item.githubLink}
              target="_blank"
              rel="noreferrer"
              className="card--link--text">
              Code
            </a>
          </span>
        </div>
        <div className="card--icons">
          {item.icons.map((icon) => (
            <img
              key={icon.altText}
              src={icon.source}
              alt={icon.altText}
              className="card--icon"
            />
          ))}
        </div>
      </div>
    </div>
  ));

  return <div className="cards">{projects}</div>;
}
