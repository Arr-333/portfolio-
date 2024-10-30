import React from 'react'
import { Link } from 'react-router-dom'
import ProjectPannel from './ProjectPannel'

export default function Project() {
    return (
        <>
            {/* <!-- START MENU DESIGN AREA --> */}
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main className="main-bg o-hidden">
                        {/* <!-- START HEADER DESIGN AREA --> */}
                        <section className="single-page-hero-area">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <h2>Projects</h2>
                                        <p>Check out my portfolio of top-notch projects that I've delivered to both CLIENTs(Front End) and
                                            SERVERs (Back End). I'm more than happy to answer any questions you may have about how we
                                            can collaborate to achieve your objectives. Feel free to get in touch with me.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END HEADER DESIGN AREA --> */}
                        {/* <!-- START PORTFOLIO DESIGN AREA --> */}
                        <ProjectPannel />
                        {/* <!-- // END PORTFOLIO DESIGN AREA --> */}
                        {/* <!-- START CALL TO ACTION DESIGN AREA --> */}
                        <section className="call-to-action-area">
                            <div className="container">
                                <div className="row">
                                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                                    <div className="col-lg-12">
                                        <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                                            <h2>Are You Ready to kickstart your project?</h2>
                                            <p>Reach out and let's make it happen ✨. I'm also available for full-time or
                                                Part-time opportunities to push the boundaries of design and deliver exceptional
                                                work.</p>
                                            <div className="hero-btns">
                                                <Link to="/contact" className="theme-btn call-to-action-button">Let's Talk <i
                                                    className="ri-download-line"></i></Link>
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
