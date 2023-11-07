import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="gradient-bg text-light py-4 mt-5" style={{ marginTop: '40px' }}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Nigerian RoboAdvisor</h5>
            <p>Providing quality services since.</p>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/privacy" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/services" className="text-light">Services</a></li>
              <li><a href="/contact" className="text-light">Contact</a></li>
              <li><a href="/privacy" className="text-light">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <a href="https://twitter.com" className="text-light me-2"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://facebook.com" className="text-light me-2"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com" className="text-light me-2" ><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://linkedin.com" className="text-light"><FontAwesomeIcon icon={faLinkedin} /></a>
          </div>
        </div>
        <div className="text-center mt-3">
          <p className="mb-0">Copyright &copy; {year} Nigerian RoboAdvisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
