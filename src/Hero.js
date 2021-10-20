export default function Hero() {
  return (
    <div className="hero__text container">
      <h1>Hey, I'm Mac</h1>
      <h2 id="subheading">A Front End React Developer</h2>
      <p>
        Thanks for taking the time out of your busy
        {setDay()} to check out my work.
      </p>

      <a href="#work" className="btn-cta">
        See My Work
      </a>
    </div>
  );
}

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
