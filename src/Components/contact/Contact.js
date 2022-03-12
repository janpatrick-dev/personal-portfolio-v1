import React from 'react';

function Contact() {
  
  return (
    <section className="section-contact" id="contact">
      <h2 className="heading-secondary u-margin-bottom-medium">Contact&nbsp;Me</h2>
      <div className="contact__text u-margin-bottom-large">
        <h2 className="contact__heading">
          <span className="contact__heading--main">Say hi!</span>
          <span className="contact__heading--sub">I'm always happy to hear from you!</span>
        </h2>
      </div>
      <div className="contact__form-group">
        <button className="btn btn-submit contact__submit-btn" type="submit">Get In Touch</button>
      </div>
    </section>
  );
}

export default Contact;