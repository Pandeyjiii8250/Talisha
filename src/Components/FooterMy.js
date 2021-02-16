import React from 'react'
import './FooterMy.css'

export default function FooterMy() {
    return (
        <div className='footer-bg'>
        <div className="container footer footer-pad">
      <div className="logo-contact">
        <h1>Talisha.</h1>
        <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
      </div>
      <div className="footer">
        <div className = 'footer-item'>
          <h5>About Us</h5>
          <ul>
            <li>Blog</li>
            <li>Privacy</li>
            <li>Terms of usage</li>
            <li>Help</li>
          </ul>
        </div>
        <div className = 'footer-item'>
          <h5>Contact Us</h5>
          <ul>
            <li>Official mailng</li>
            <li>Facebook</li>
            <li>Tweeter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div className = 'footer-item'>
          <h5>Registerd Office address</h5>
          <p>Blaa.....Blaa... BLaa..</p>
        </div>
      </div>
    </div>
    </div>
    )
}
