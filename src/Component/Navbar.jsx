import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            {/* <!-- START PRELOADER AREA--> */}
            <div className="preloader">
                <svg viewbox="0 0 1000 1000" preserveaspectratio="none">
                    <path id="preloaderSvg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>
                <div className="preloader-heading">
                    <div className="load-text">
                        <span>L</span>
                        <span>o</span>
                        <span>a</span>
                        <span>d</span>
                        <span>i</span>
                        <span>n</span>
                        <span>g</span>
                    </div>
                </div>
            </div>
            {/* <!-- END PRELOADER AREA --> */}
            {/* <!-- START MAGIC CURSOR AND BALL AREA--> */}
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            <div id="magic-cursor">
                <div id="ball"></div>
            </div>
            {/* <!-- / END MAGIC CURSOR AND BALL AREA--> */}
            {/* <!-- START MENU DESIGN AREA --> */}
            <header className="main-header">
                <div className="header-upper">
                    <div className="container">
                        <div className="header-inner d-flex align-items-center">
                            {/* <!-- START LOGO DESIGN AREA --> */}
                            <div className="logo-outer">
                                <div className="logo">
                                    <a href="index.html"><img src="assets/images/logos/logo.png" alt="Logo" title="Logo" /></a>
                                </div>
                            </div>
                            {/* <!-- / END LOGO DESIGN AREA --> */}
                            {/* <!-- START NAV DESIGN AREA --> */}
                            <div className="nav-outer clearfix mx-auto">
                                {/* <!-- Main Menu --> */}
                                <nav className="main-menu navbar-expand-lg">
                                    <div className="navbar-header">
                                        <div className="mobile-logo">
                                            <a href="index.html">
                                                <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
                                            </a>
                                        </div>
                                        {/* <!-- Toggle Button --> */}
                                        <button type="button" className="navbar-toggle" data-bs-toggle="collapse" data-bs-target=".navbar-collapse">
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div className="navbar-collapse collapse">
                                        <ul className="navigation clearfix">
                                            <li><Link className="nav-link-click" to="/">Home</Link></li>
                                            <li><Link className="nav-link-click" to="about">about</Link></li>
                                            <li><Link className="nav-link-click" to="projects">Projects</Link></li>
                                            <li><Link className="nav-link-click" to="blog">Resume</Link></li>
                                            <li><Link className="nav-link-click" to="contact">Contact</Link></li>
                                        </ul>
                                    </div>
                                </nav>
                                {/* <!-- / END NAV DESIGN AREA --> */}
                            </div>
                            <div className="about-social text-center">
                                <ul>
                                    <li><a href=""><i className="ri-facebook-circle-fill"></i></a></li>
                                    <li><a href=""><i className="ri-twitter-x-line"></i></a></li>
                                    <li><a href=""><i className="ri-linkedin-fill"></i></a></li>
                                    <li><a href=""><i className="ri-github-line"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* <!-- / END MENU DESIGN AREA --> */}

        </>
    )
}
