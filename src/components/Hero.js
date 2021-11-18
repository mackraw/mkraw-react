import Circle from '../assets/images/circle.svg';

function setDay() {
  const weekdays = [
    ' Sunday',
    ' Monday',
    ' Tuesday',
    ' Wednesday',
    ' Thursday',
    ' Friday',
    ' Saturday',
  ];
  const today = new Date();
  return weekdays[today.getDay()];
}

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero--text">
        <h1 className="hero--heading">Hey, I'm Mac</h1>
        <h2 className="hero--subheading" id="subheading">
          A Frontend React Developer
        </h2>
        <p className="hero--para">
          Thanks for taking the time out of your busy
          {setDay()} to check out my work.
        </p>
      </div>
      <a href="#work" className="btn-cta">
        See My Work
      </a>
      <img src={Circle} className="circle circle1" alt="Circle" />
      <img src={Circle} className="circle circle2" alt="Circle" />
    </section>
  );
}
