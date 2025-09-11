import React, { useRef }  from 'react'
import '../Footer.css';
export default function Footer() {
  return (
     <footer className='maxWidth: 100% border border-secondary mt-5'>
        <div className="container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>TextUtils</h3>
                    <p>The complete editing for text , photoes and files.</p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Legal</h3>
                    <ul>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Terms of Service</a></li>
                        <li><a href="/">Cookie Policy</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Newsletter</h3>
                    <p>Subscribe to our newsletter for updates</p>
                    <form>
                        <input type="email" placeholder="Your Email" />
                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 TextUtils. All rights reserved.</p>
            </div>
        </div>
    </footer>

  )
}
