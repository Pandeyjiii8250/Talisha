import React from 'react';

import {Link} from "react-router-dom";
import './FooterMy.css'

export default function FooterMy() {
    return (
      <div className='footer-bg' id="footer-know">
        <div className="container footer footer-pad">
          <div className="logo-contact">
            <h1>Vaaroo.</h1>
            <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          </div>
          <div className="footer">
            <div className = 'footer-item'>
              <h5>Policy</h5>
              <ul>
                <Link to="/return"><li>Return Policy</li></Link>
                <Link to="/privacy"><li>Privacy Policy</li></Link>
                <Link to="/termsofuse"><li>Terms of Use</li></Link>
                <Link to="/shipping"><li>Shipping Policy</li></Link>
              </ul>
            </div>
            <div className = 'footer-item'>
              <h5>Help & Support </h5>
              <Link to="/cmsoon"><ul>
                <li>FAQ</li>
                <li>Cancellation and Return</li>
                <li>How To's</li>
              </ul></Link>
              <h5>Services </h5>
              <Link to="/cmsoon"><ul>
                <li>Vaaroo wholesale</li>
                <li>For Pundits</li>
                <li>Sell with us</li>
                <li>Advertize hear</li>
                <li>Business queries</li>
              </ul></Link>
              
            </div>
            <div className = 'footer-item'>
              <h5>Company</h5>
              <Link to="/cmsoon">
              <ul>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Investors</li>
              </ul>
              </Link>
              <h5>Contact Us</h5>
              <ul>
                <li>MAIL US:</li>
                <li>varoo.info@gmail.com</li>
                <li>Phone</li>
                <li>1234-5678</li>
                <i class="fa fa-facebook-square contact-icon" aria-hidden="true"></i>
                <i class="fa fa-instagram contact-icon" aria-hidden="true"></i>
              </ul>
            </div>
          </div>
        </div>
        <div className="copy-right">
            <p>Copyright &#169; Vaaroo 2021</p>
          </div>
      </div>
    )
}
