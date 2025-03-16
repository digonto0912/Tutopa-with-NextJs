'use client'

import Image from 'next/image';
import '../styles/navBar.css';
import React, { useState } from "react"
import Link from 'next/link';

const Navbar = () => {
    const [navMenuOpen, setNavMenuOpen] = useState(false)
    const [BGBlack, setBGBlack] = useState(false)

    const navMenuToggle = () => {
        setNavMenuOpen(!navMenuOpen)
        setBGBlack(!BGBlack)
    }

    return (
        <div>
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-wrapper">
                        <Link href="/" className="navbar-logo">
                            <Image src="./images/img-tutopa.svg" alt="Tutopa Logo" width="110" height="50"
                                className="navbar-logo-image" />
                        </Link>
                        <div className={`navbar-menu ${navMenuOpen && "active"}`}>
                            <ul className="navbar-menu-list">
                                <li className="navbar-menu-list-item">
                                    <Link href="#" className="navbar-menu-list-item-link">Home</Link>
                                </li>
                                <li className="navbar-menu-list-item">
                                    <Link href="#" className="navbar-menu-list-item-link">What We
                                        Teach</Link>
                                </li>
                                <li className="navbar-menu-list-item">
                                    <Link href="#download-section" className="btn btn-secondary"
                                        data-navbar-close-noprevent="">Download</Link>
                                </li>
                            </ul>
                            <button
                                type="button"
                                className="navbar-menu-close"
                                onClick={navMenuToggle}
                            >
                                <svg className="navbar-menu-close-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={`bg-black ${BGBlack && "active"}`}></div>
                        <button
                            type="button"
                            className="btn btn-icon btn-outline-light navbar-menu-toggle"
                            onClick={navMenuToggle}
                        >
                            <svg className="navbar-menu-toggle-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Navbar;