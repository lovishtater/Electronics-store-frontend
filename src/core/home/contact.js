import React from 'react';
import '../../styles.css'

const contact = () => {
    return (
        <section id="contact" className="contact text-dark">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>

        <div>
          <iframe title="map" className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14476.817612115266!2d74.6257754!3d24.8910085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb66e26e8cf396486!2sVijay%20Electronics!5e0!3m2!1sen!2sin!4v1620428700932!5m2!1sen!2sin" frameborder="0" allowfullscreen></iframe>
        </div>

        <div className="row mt-5">

          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>40, panna dhay colony, Chittorgarh</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:lovishtater@gmail.com">lovishtater@gmail.com</a></p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p><a href="tel:+918949756599">8949756599</a></p>
              </div>

            </div>

          </div>

          <div className="col-lg-8 mt-5 mt-lg-0">

            <form action="#" method="post" role="form" className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
              </div>
              {/* <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div> */}
              <div ><button className="text-center btn btn-block btn-outline-success mt-2 mb-2" type="submit">Send Message</button></div>
            </form>

          </div>

        </div>

      </div>
    </section>
    );
}

export default contact;