import React from "react"
import "../styles/Download.css"

const Download = () => {
  return (
    <div className="banner-section" id="download-section">
          <div className="container">
            <div className="banner-wrapper">
              <div className="banner-left">
                <h2 className="banner-title">
                  Download our Mobile App to get started now.
                </h2>
                <p className="banner-description">
                  Tutopa gives you the tools to monitor, support, and
                  improve your child&#39;s school performance from the
                  convenience of your phone.
                </p>
                <div className="banner-cta">
                  <a href="https://play.google.com/store/apps/details?id=com.tutopa.app"
                    className="btn btn-black banner-cta-item">
                    <img src="./images/img-google-play-icon.svg" alt="" className="banner-cta-item-icon" />
                    <span>Google Play</span>
                  </a>
                  <a href="https://apps.apple.com/gb/app/tutopa/id6477697904"
                    className="btn btn-black banner-cta-item">
                    <img src="./images/img-apple-icon.svg" alt="" className="banner-cta-item-icon" />
                    <span>App Store</span>
                  </a>
                </div>
              </div>
              <div className="banner-right">
                <div className="banner-images">
                  <div>
                    <img src="./images/img-hero-1.png" alt="" className="banner-image" />
                  </div>
                  <div>
                    <img src="./images/img-hero-2.png" alt="" className="banner-image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
};

export default Download;