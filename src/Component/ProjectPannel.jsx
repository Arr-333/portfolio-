import React from 'react'

export default function ProjectPannel() {
    return (
        <>
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
                                    <span className="portfolio-category">Food-Point</span>
                                    {/* <!-- Caption --> */}
                                    <div className="portfolio-caption">
                                        <h1>What a fantastic meal!</h1>
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
                                    <span className="portfolio-category">E-krt</span>
                                    {/* <!-- Caption --> */}
                                    <div className="portfolio-caption">
                                        <h1>I shop, therefore I am.</h1>
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
                                    <span className="portfolio-category">Portfolio</span>
                                    {/* <!-- Caption --> */}
                                    <div className="portfolio-caption">
                                        <h1>Know about me!</h1>
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
                                    <span className="portfolio-category">Lets Tlk</span>
                                    {/* <!-- Caption --> */}
                                    <div className="portfolio-caption">
                                        <h1>Only Chatting,Can't Talk</h1>
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* <!-- // END SINGLE PORTFOLIO DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </>
    )
}
