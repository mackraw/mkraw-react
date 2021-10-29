import Card from './Card';

export default function Work() {
  return (
    <section className="work container" id="work">
      <hgroup className="work__header">
        <h3 className="work__heading section-heading" id="sectionHeading">
          Work
        </h3>
      </hgroup>
      <div className="cards">
        <Card />
      </div>
      <p id="more">More work will appear here soon...</p>
    </section>
  );
}
