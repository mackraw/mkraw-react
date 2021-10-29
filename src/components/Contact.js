export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <hgroup className="contact__header">
        <h3 className="contact__heading section-heading" id="sectionHeading">
          Contact
        </h3>
      </hgroup>

      <div className="contact-content">
        <div className="email-sec">
          <p>
            Say hello!{' '}
            <a href="mailto:hi@mkraw.com" className="email-link">
              hi@mkraw.com
            </a>
          </p>
        </div>

        <form action="contact.php" className="contact-form" method="POST">
          <div className="form__item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-input"
              id="name"
              name="name"
              required
            />
          </div>

          <div className="form__item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="form__item">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              className="form-input"
              id="message"
              cols="30"
              rows="10"></textarea>
          </div>

          <button
            type="submit"
            className="form__submit-btn"
            onClick={handleFormSubmit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

const handleFormSubmit = async (e) => {
  e.preventDefault();
  console.log('you clicked');
  try {
    const url = 'contact.php';
    const res = await fetch(url);
    if (res.statusText === 'ok') {
      console.log('received OK...');
    } else if (res.statusText === 'error') {
      console.log('received error...');
    } else {
      console.log(res);
    }
  } catch (err) {
    console.error(err);
  }
};
