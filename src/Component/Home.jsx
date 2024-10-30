import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>

            {/* <!-- START MENU DESIGN AREA --> */}
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-bg o-hidden">
                        {/* <!-- START HEADER DESIGN AREA --> */}
                        <section id="home" className="main-hero-area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="glitch">
                                            <img src="assets/images/about/me.jpg" alt="About Me" />
                                            <div className="glitch__layers">
                                                <div className="glitch__layer"></div>
                                                <div className="glitch__layer"></div>
                                                <div className="glitch__layer"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        {/* <!-- START HERO DESIGN AREA --> */}
                                        <div className="hero-content wow fadeInUp delay-0-2s">
                                            <h1>I am "Full Stack MERN DEVELOPER" , React.js, and Node.js with Express.js & MongoDB in Database.</h1>
                                            <h2>Hi, i'm Archit i'm a Web Developer & Designer with personal Projects focusing on app Developement. </h2>
                                            <div className="hero-btns">
                                                {/* <Link to="/cv" className="theme-btn">Download CV <i className="ri-download-line"></i></Link> */}
                                                <a className="theme-btn" href="/assets/images/Archit_Resume.pdf" download="Archit_Dhillon_Resume">Download CV <i className="ri-download-line"></i></a>
                                            </div>
                                        </div>
                                        {/* <!-- / END HERO DESIGN AREA --> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END HEADER DESIGN AREA --> */}
                        {/* <!-- START PORTFOLIO DESIGN AREA --> */}
                        <div className="projects-area" id="portfolio">
                            <div className="custom-icon">
                                <img src="assets/images/custom/work-scribble.svg" alt="custom" />
                            </div>
                            <div className="container-fluid">
                                <div className="row g-4 portfolio-grid">
                                    {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                                    <div className="col-md-6 col-xl-6 portfolio-item category-1">
                                        <a href="assets/images/projects/work1.jpg" className="work-popup">
                                            <div className="portfolio-box">
                                                {/* <!-- Image --> */}
                                                <img src="assets/images/projects/work1.jpg" alt="" data-rjs="2" />
                                                {/* <!-- Category --> */}
                                                <span className="portfolio-category">Branding</span>
                                                {/* <!-- Caption --> */}
                                                <div className="portfolio-caption">
                                                    <h1>Glasses of Cocktail</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                                    {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                                    <div className="col-md-6 col-xl-6 portfolio-item category-2">
                                        <a href="single-project.html">
                                            <div className="portfolio-box">
                                                {/* <!-- Image --> */}
                                                <img src="assets/images/projects/work2.jpg" alt="" data-rjs="2" />
                                                {/* <!-- Category --> */}
                                                <span className="portfolio-category">Mockup</span>
                                                {/* <!-- Caption --> */}
                                                <div className="portfolio-caption">
                                                    <h1>A Branch with Flowers</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                                    {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                                    <div className="col-md-6 col-xl-4 portfolio-item category-2">
                                        <a href="https://www.youtube.com/watch?v=qZEPs3vmYB4" className="popup-youtube">
                                            <div className="portfolio-box">
                                                {/* <!-- Image --> */}
                                                <img src="assets/images/projects/work3.jpg" alt="" data-rjs="2" />
                                                {/* <!-- Category --> */}
                                                <span className="portfolio-category">Video</span>
                                                {/* <!-- Caption --> */}
                                                <div className="portfolio-caption">
                                                    <h1>Orange Rose Flower</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                                    {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                                    <div className="col-md-6 col-xl-4 portfolio-item category-1">
                                        <a href="assets/images/projects/work4.jpg" className="work-popup">
                                            <div className="portfolio-box">
                                                {/* <!-- Image --> */}
                                                <img src="assets/images/projects/work4.jpg" alt="" data-rjs="2" />
                                                {/* <!-- Category --> */}
                                                <span className="portfolio-category">Branding</span>
                                                {/* <!-- Caption --> */}
                                                <div className="portfolio-caption">
                                                    <h1>Green Plant on a Desk</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                                    {/* <!-- START SINGLE PORTFOLIO DESIGN AREA --> */}
                                    <div className="col-md-6 col-xl-4 portfolio-item category-2">
                                        <a href="assets/images/projects/work5.jpg" className="work-popup">
                                            <div className="portfolio-box">
                                                {/* <!-- Image --> */}
                                                <img src="assets/images/projects/work5.jpg" alt="" data-rjs="2" />
                                                {/* <!-- Category --> */}
                                                <span className="portfolio-category">Mockup</span>
                                                {/* <!-- Caption --> */}
                                                <div className="portfolio-caption">
                                                    <h1>Orange Rose Flower</h1>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END PORTFOLIO DESIGN AREA --> */}
                        {/* <!-- START COMPANY DESIGN AREA --> */}
                        {/* <div className="company-design-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h2>Company I Worked With</h2>
                                        <div className="company-list">
                                            <div className="scroller" data-direction="left" data-speed="slow">
                                                <div className="scroller__inner">
                                                    <img src="assets/images/client-logos/partner1.png" alt="" />
                                                    <img src="assets/images/client-logos/partner2.png" alt="" />
                                                    <img src="assets/images/client-logos/partner3.png" alt="" />
                                                    <img src="assets/images/client-logos/partner4.png" alt="" />
                                                    <img src="assets/images/client-logos/partner5.png" alt="" />
                                                    <img src="assets/images/client-logos/partner1.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        {/* <!-- // END COMPANY DESIGN AREA --> */}
                        {/* <!-- START CALL TO ACTION DESIGN AREA --> */}
                        <section className="call-to-action-area">
                            <div className="container">
                                <div className="row">
                                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                                    <div className="col-lg-12">
                                        <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                                            <h2>Are You Ready to kickstart your project?</h2>
                                            <p>Reach out and let's make it happen ✨. I'm also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.</p>
                                            <div className="hero-btns">
                                                <Link to="/contact" className="theme-btn call-to-action-button">Let's Talk <i className="ri-download-line"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                                </div>
                            </div>
                        </section>
                        {/* <!--  // END CALL TO ACTION DESIGN AREA --> */}
                        {/* <!-- START FOOTER DESIGN AREA --> */}

                    </main>
                </div>
            </div>
            {/* <!-- / END FOOTER DESIGN AREA --> */}
            {/* <!-- START SCROOL UP DESIGN AREA --> */}
            <div className="progress-wrap cursor-pointer">
                <i className="ri-arrow-up-s-line"></i>
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

        </>
    )
}
