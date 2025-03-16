import "../styles/footer.css"
import React from "react"
import Image from "next/image";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-brand">
                            <a href="#" className="footer-logo">
                                <Image src='./images/img-tutopa.svg' alt="Tutopa Logo" width='110' height='50' className="footer-logo-image" />
                            </a>
                            <p className="footer-description">
                                Tutopa gives you the tools to monitor, support, and improve
                                your child&apos;s school performance from the convenience of your
                                phone.
                            </p>
                        </div>
                        <ul className="footer-menu">
                            <li className="footer-menu-item">
                                <a href="#" className="footer-menu-item-link">Home</a>
                            </li>
                            <li className="footer-menu-item">
                                <a href="#" className="footer-menu-item-link">Terms of Service</a>
                            </li>
                            <li className="footer-menu-item">
                                <a href="#" className="footer-menu-item-link">Privacy &amp; Policy</a>
                            </li>
                            <li className="footer-menu-item">
                                <a href="#" className="footer-menu-item-link">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-bottom-text">© 2024 Tutopa. All rights reserved</p>
                </div>
            </div>
        </div>
    )
};

export default Footer;
