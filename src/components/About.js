import pic from './../assets/images/pic.png';

export default function About() {
  return (
    <section className="about container" id="about">
      <hgroup className="about__header">
        <h3 className="about__heading section-heading" id="sectionHeading">
          About
        </h3>
      </hgroup>
      <img src={pic} alt="Mac Krawczyk" className="picture" />
      <p className="block-para">
        Frontend Web Developer with two years of progressive experience using
        his technical skills to produce stunning and functional websites.
        Chancellor's Honor Award for exemplary work and a perfect grade-point
        average.
      </p>
    </section>
  );
}
