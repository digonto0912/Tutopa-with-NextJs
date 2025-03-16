import React from "react"
import "../styles/Header.css"

const Header = () => {
  return (
    <div className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          The Proven Way to Boost Your Child&#39;s Grades
        </h1>
        <p className="hero-description">
          Tutopa gives you the tools to monitor, support, and improve
          your child&#39;s school performance from the convenience of your
          phone.
        </p>
        <div className="hero-cta">
          <a href="https://play.google.com/store/apps/details?id=com.tutopa.app"
            className="btn btn-black hero-cta-item">
            <img src="images/img-google-play-icon.svg" alt="" className="hero-cta-item-icon" />
            <span>Google Play</span>
          </a>
          <a href="https://apps.apple.com/gb/app/tutopa/id6477697904" className="btn btn-black hero-cta-item">
            <img src="images/img-apple-icon.svg" alt="" className="hero-cta-item-icon" />
            <span>App Store</span>
          </a>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image">
            <div className="hero-image-item">
              <img src="images/img-hero-1.png" alt="" className="hero-image-item-image" />
            </div>
            <div className="hero-image-item">
              <img src="images/img-hero-2.png" alt="" className="hero-image-item-image" />
            </div>
          </div>
          <div className="hero-image-type hero-image-type-left">
            <p className="hero-image-type-text">
              <span>Parent</span><br />Dashboard
            </p>
            <img src="images/img-hero-arrow.png" alt="" className="hero-image-type-arrow" />
          </div>
          <div className="hero-image-type hero-image-type-right">
            <p className="hero-image-type-text">
              <span>Child</span><br />Dashboard
            </p>
            <img src="images/img-hero-arrow.png" alt="" className="hero-image-type-arrow" />
          </div>
        </div>
      </div>
      <div className="hero-decoration-left">
        <div className="hero-decoration top"></div>
        <div className="hero-decoration bottom"></div>
      </div>
      <div className="hero-decoration-right">
        <div className="hero-decoration top"></div>
        <div className="hero-decoration bottom"></div>
      </div>
    </div>
  )
};

export default Header;