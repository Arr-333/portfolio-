import React from 'react'

export default function Blog() {
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
                                        <h2>Resume</h2>
                                        <p>I specialize in design, productivity, and tech.  My creative process and latest projects. No spam or ads, just valuable insights and tips."</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* resume start */}
                        <div className="container mb-2">
                            <div className="row">
                                <div className='col-md-4   '>
                                    <img className='ss' src="/assets/images/Archit_Resume_page-0001.jpg" alt="" />
                                </div>
                                <div className='col-md-4'>
                                    <img className='ss' src="/assets/images/Archit_Resume_page-0002.jpg" alt="" />
                                </div>
                                <div className='col-md-4 '>
                                    <img className='ss' src="/assets/images/Archit_Resume_page-0003.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* resume end */}



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
