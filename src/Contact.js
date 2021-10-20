export default function Contact() {
  return (
    <section className="contact container" id="contact">
      <hgroup className="contact__header">
        <span className="headingShaddow"></span>
        <h3 className="contact__heading section-heading" id="sectionHeading">
          Contact
        </h3>
      </hgroup>

      <div className="contact-content">
        <div className="email-sec">
          <p>Say hello!</p>
          <a href="mailto:hi@mkraw.com" className="email-link">
            hi@mkraw.com
          </a>
        </div>

        <form
          action="https://www.formbackend.com/f/2f379630831a99f0"
          className="contact-form"
          method="POST">
          <div className="form__item">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="form__item">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="form__item">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"></textarea>
          </div>

          <button type="submit" className="form__submit-btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
}
