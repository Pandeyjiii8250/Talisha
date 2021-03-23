import React from 'react'
import './FooterMy.css'

export default function FooterMy() {
    return (
      <div className='footer-bg'>
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
                <li>Return Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                <li>Shipping Policy</li>
              </ul>
            </div>
            <div className = 'footer-item'>
              <h5>Help & Support </h5>
              <ul>
                <li>FAQ</li>
                <li>Cancellation and Return</li>
                <li>How To's</li>
              </ul>
              <h5>Services </h5>
              <ul>
                <li>Vaaroo wholesale</li>
                <li>For Pundits</li>
                <li>Sell with us</li>
                <li>Advertize hear</li>
                <li>Business queries</li>
              </ul>
              
            </div>
            <div className = 'footer-item'>
              <h5>Company</h5>
              <ul>
                <li>About Us</li>
                <li>Carrers</li>
                <li>Investors</li>
              </ul>
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
