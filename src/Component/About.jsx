import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
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
                                        <h2>About me</h2>

                                    </div>
                                </div>
                                <div className="row">
                                    {/* <!-- START COUNTER DESIGN AREA --> */}
                                    <div className="col-6 col-lg-6">
                                        <div className="hero-counter-area wow fadeInUp delay-0-4s">
                                            <div className="counter-item counter-text-wrap">
                                                <span className="count-text plus" data-speed="3000" data-stop="8">0</span>
                                                <span className="counter-title">Years Of Experience</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- / END COUNTER DESIGN AREA --> */}
                                    {/* <!-- START COUNTER DESIGN AREA --> */}
                                    <div className="col-6 col-lg-6">
                                        <div className="hero-counter-area wow fadeInUp delay-0-4s">
                                            <div className="counter-item counter-text-wrap">
                                                <span className="count-text plus" data-speed="3000" data-stop="1">0</span>
                                                <span className="counter-title">Complete Projects</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- / END COUNTER DESIGN AREA --> */}

                                    {/* <!-- START COUNTER DESIGN AREA --> */}

                                    {/* <!-- / END COUNTER DESIGN AREA --> */}
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END HEADER DESIGN AREA --> */}
                        {/* <!-- START ABOUT DESIGN AREA --> */}
                        <section id="about" className="about-area">
                            <div className="container">
                                <div className="container-inner">
                                    <div className="row align-items-center">
                                        {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                                        <div className="col-lg-5">
                                            <div className="about-image-part wow fadeInUp delay-0-3s">
                                                <img src="assets/images/about/me.jpg" alt="About Me" />
                                            </div>
                                        </div>
                                        {/* <!-- / END ABOUT IMAGE DESIGN AREA --> */}
                                        {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                                        <div className="col-lg-7">
                                            <div className="about-content-part wow fadeInUp delay-0-5s">
                                                <h2>
                                                    A passionate <span>MERN stack Developer</span> turning <span>ideas</span> into
                                                    visually stunning, user-friendly websites.
                                                </h2>
                                                <p>
                                                    Hello! I’m Archit Kumar Dhillon, a passionate developer with a strong foundation in the MERN stack.
                                                    I recently completed my training from Ducat Noida, where I mastered HTML, CSS, JavaScript,
                                                    and back-end technologies like Express and Node.js.
                                                </p>

                                            </div>
                                        </div>
                                        {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END ABOUT DESIGN AREA --> */}
                        {/* <!-- START RESUME EXPERIENCE DESIGN AREA --> */}
                        <div className="resume-area" id="resume">
                            <div className="container">
                                <div className="container-inner">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                                <h2>Education </h2>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-10">
                                            <div className="resume-wrapper wow fadeInUp delay-0-2s">
                                                {/* <!-- START SINGLE EXPERIENCE DESIGN AREA --> */}
                                                <div className="resume-box">
                                                    <span className="resume-date">2024 - Present</span>
                                                    <h5 className="fw-medium">DUCAT, The IT Traning School</h5>
                                                    <span>MERN-Stack + Web Designing</span>
                                                    <p>I have successfully completed my MERN Stack and Web Designing course from Ducat Noida.
                                                        Additionally, I have worked on an E-commerce Admin panel as a personal project,
                                                        enhancing my practical development skills.</p>
                                                </div>

                                                <div className="resume-box">
                                                    <span className="resume-date">2024 - Present</span>
                                                    <h5 className="fw-medium">Chaudhary Charan Singh University, Meerut</h5>
                                                    <span>Master of Computer Applications(MCA)</span>
                                                    <p></p>
                                                </div>
                                                {/* <!-- / END SINGLE EXPERIENCE DESIGN AREA --> */}
                                                {/* <!-- START SINGLE EXPERIENCE DESIGN AREA --> */}
                                                <div className="resume-box">
                                                    <span className="resume-date">2019 - 2022</span>
                                                    <h5 className="fw-medium">Chaudhary Charan Singh University, Meerut</h5>
                                                    <span>Bachelor of Computer Applications(BCA))</span>
                                                    <p></p>
                                                </div>
                                                {/* <!-- / END SINGLE EXPERIENCE DESIGN AREA --> */}
                                                {/* <!-- START SINGLE EXPERIENCE DESIGN AREA --> */}
                                                <div className="resume-box">
                                                    <span className="resume-date">2018 - 2019</span>
                                                    <h5 className="fw-medium">D S Public School, Muzaffarnagar</h5>
                                                    <span>10+2</span>
                                                    <p></p>
                                                </div>
                                                <div className="resume-box">
                                                    <span className="resume-date">2016 - 2017</span>
                                                    <h5 className="fw-medium">D S Public School, Muzaffarnagar</h5>
                                                    <span>10th</span>
                                                    <p></p>
                                                </div>
                                                {/* <!-- / END SINGLE EXPERIENCE DESIGN AREA --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- / END RESUME EXPERIENCE DESIGN AREA --> */}
                        {/* <!-- START SERVICE DESIGN AREA --> */}
                        <section id="services" className="services-area">
                            <div className="container">
                                <div className="container-inner">
                                    <div className="row">
                                        <div className="col-xl-12 col-lg-12">
                                            <div className="section-title mb-40 wow fadeInUp delay-0-2s">
                                                <h2>Full-stack developer</h2>
                                                <p>The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-item wow fadeInUp delay-0-2s">
                                                <div className="content">
                                                    <i className="ri-global-fill"></i>
                                                    <h4>Front-end development</h4>
                                                    <p>I can work with HTML, CSS, and JavaScript, where HTML provides the structure,
                                                        CSS the styling and layout, and JavaScript the dynamic behavior and interactivity.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}

                                        {/* <!-- START SINGLE SERVICE DESIGN AREA --> */}
                                        <div className="col-lg-6 col-md-6">
                                            <div className="service-item wow fadeInUp delay-0-6s">
                                                <div className="content">
                                                    <i className="ri-pantone-fill"></i>
                                                    <h4>Back-end development</h4>
                                                    <p>I can also work on Express, a Node.js server, and a database as a back-end developer.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- / END SINGLE SERVICE DESIGN AREA --> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END SERVICE DESIGN AREA --> */}
                        {/* <!-- START CALL TO ACTION DESIGN AREA --> */}
                        <section className="call-to-action-area">
                            <div className="container">
                                <div className="row">
                                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                                    <div className="col-lg-12">
                                        <div className="call-to-action-part wow fadeInUp delay-0-2s text-center">
                                            <h2>Are You Ready to kickstart your project?</h2>
                                            <p>Reach out and let's make it happen ✨. I'm also available for full-time or
                                                Part-time opportunities to push the boundaries of DESIGN and DEVELOP exceptional
                                                CODES.</p>
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
            {/* <!-- / END SCROOL UP DESIGN AREA --> */}
        </>
    )
}

