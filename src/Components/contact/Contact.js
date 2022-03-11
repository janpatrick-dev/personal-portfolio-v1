import React from 'react';

function Contact() {
  
  return (
    <section class="section-contact" id="contact">
      <h2 class="heading-secondary u-margin-bottom-medium">Contact&nbsp;Me</h2>
      <div class="contact__text u-margin-bottom-large">
        <h2 class="contact__heading">
          <span class="contact__heading--main">Say hi!</span>
          <span class="contact__heading--sub">I'm always happy to hear from you!</span>
        </h2>
      </div>
      <div class="contact__form-group">
        <button class="btn btn-submit contact__submit-btn" type="submit">Get In Touch</button>
      </div>
    </section>
  );
}

export default Contact;