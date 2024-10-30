import React from 'react'

export default function Contact() {
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
                                        <h2>Say Hello</h2>
                                        <p>Fill out the form below to get in touch with me. I'm always excited to hear about new
                                            opportunities and I'll do my best to respond to your inquiry within 24 hours.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END HEADER DESIGN AREA --> */}
                        {/* <!-- START CONTACT DESIGN AREA --> */}
                        <section id="contact" className="contact-area">
                            <div className="container">
                                <div className="container-inner">
                                    <div className="row">
                                        {/* <!-- START CONTACT FORM DESIGN AREA --> */}
                                        <div className="col-lg-12">

                                            <div className="contact-form contact-form-area wow fadeInUp delay-0-4s">
                                                <form id="contactForm" className="contactForm" name="contactForm"
                                                    action="assets/php/form-process.php" method="post">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className='text-warning' for="number">Number</label>
                                                                <h5>
                                                                    <a className='text-danger xyz fw-bolder' href="tel:7300521792">7300521792</a>
                                                                </h5>
                                                                <label for="name" className="for-icon"><i
                                                                    className="far fa-user"></i></label>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label className='text-warning' for="email">Email Address</label>
                                                                <h5>  <a className='text-danger xyz fw-bolder' href="mailto:arr521792@gmail.com">architdhillon333@mail.com</a></h5>
                                                                <label for="email" className="for-icon"><i
                                                                    className="far fa-envelope"></i></label>
                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group">
                                                                <label className='text-warning' for="address">Address</label>
                                                                <h5><a className='text-danger xyz fw-bolder' href="https://www.google.com/maps/place/29%C2%B011'19.8%22N+77%C2%B053'35.4%22E/@29.1888312,77.8925233,190m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d29.18883!4d77.893167?entry=ttu">Village + Post: Rahawati,
                                                                    <br />250401,Meerut,UP, India</a></h5>

                                                                <div className="help-block with-errors"></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-12">
                                                            <div className="form-group mb-0">
                                                                <button type="submit" className="theme-btn">
                                                                    Send Me Message <i className="ri-mail-line"></i>
                                                                </button>
                                                                <div id="msgSubmit" className="hidden"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        {/* <!-- / END CONTACT FORM DESIGN AREA --> */}
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* <!-- / END CONTACT DESIGN AREA --> */}
                        {/* <!-- START FOOTER DESIGN AREA --> */}
                        <footer className="main-footer">
                            <div className="footer-bottom pt-50 pb-40">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 text-center">
                                            <div className="copyright-text">
                                                <p>
                                                    &copy;Copyright <a href="index.html">Wize</a> All
                                                    Rights Reserved.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </main>
                </div>
            </div >
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
