import pic from '../assets/images/pic.png';

export default function About() {
  return (
    <section className="about container" id="about">
      <hgroup>
        <h3 className="section-heading" id="sectionHeading">
          About
        </h3>
      </hgroup>
      <div className="about--content">
        <img src={pic} alt="Mac Krawczyk" className="about--picture" />
        <p className="about--para">
          Frontend Web Developer with two years of progressive experience using
          his technical skills to produce stunning and functional websites.
          Chancellor's Honor Award for exemplary work and a perfect grade-point
          average.
        </p>
      </div>
    </section>
  );
}
