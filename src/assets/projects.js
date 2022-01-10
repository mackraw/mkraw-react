import html5Icon from './images/html5.svg';
import css3Icon from './images/css3.svg';
import jsIcon from './images/js.svg';
import phpIcon from './images/php.svg';
import bootstrapIcon from './images/bootstrap.svg';
import codeigniterIcon from './images/codeigniter.svg';
import mysqlIcon from './images/mysql.svg';
import restaurantImage from './images/RestauranteItalia.png';
import kidsbankImage from './images/kidsbank.png';

export const projects = [
  {
    title: 'Restaurante Italia!',
    image: restaurantImage,
    imageAlt: 'Screenshot of project Restaurante Italia!',
    link: 'https://restaurant.mkraw.com/',
    githubLink: 'https://github.com/mackraw/demo-restaurant',
    description:
      'Multi-page, responsive demo website for a restaurant. Written in vanilla JS. Uses geolocation and LocationIQ API to show results for restarants based on your location or search.',
    icons: [
      {
        source: html5Icon,
        altText: 'HTML5',
      },
      {
        source: css3Icon,
        altText: 'CSS3',
      },
      {
        source: jsIcon,
        altText: 'JavaScript',
      },
    ],
  },
  {
    title: "Kids' Bank",
    image: kidsbankImage,
    imageAlt: "Screenshot of the Kids' Bank project",
    link: 'https://kidsbank.live/',
    githubLink: 'https://github.com/mackraw/kidsbank',
    description:
      'Built in CodeIgniter following the MVC design pattern, MySQL database, user registration, external API.',
    icons: [
      {
        source: html5Icon,
        altText: 'HTML5',
      },
      {
        source: css3Icon,
        altText: 'CSS3',
      },
      {
        source: jsIcon,
        altText: 'JavaScript',
      },
      {
        source: phpIcon,
        altText: 'PHP',
      },
      {
        source: bootstrapIcon,
        altText: 'Bootstrap',
      },
      {
        source: codeigniterIcon,
        altText: 'CodeIgniter',
      },
      {
        source: mysqlIcon,
        altText: 'MySQL',
      },
    ],
  },
];

export default projects;
