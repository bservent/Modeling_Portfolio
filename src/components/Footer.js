import React from 'react';

function Footer() {
  return (
  <div>
    <footer>
      <div className="wrap">
        <div className="social-links">
          <a href=""><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
          <a href=""><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
        <input type="text" placeholder="Email Address" />
        <button type="submit">Keep in Touch</button>
      </div>

      <p className="copyright">&copy;2021 Brittany Servent</p>
    </footer>
  </div>
  )
};

export default Footer;