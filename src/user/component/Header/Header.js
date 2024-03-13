import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Header(props) {
    let carouselOptions = {
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
            '<div class="owl-prev"><i class="bi bi-chevron-left"></i></div>',
            '<div class="owl-next"><i class="bi bi-chevron-right"></i></div>'
        ]
    }
    return (
        <div>
            <div class="container-xxl bg-white p-0">
                {/* Navbar Start */}
                <div className="container-fluid nav-bar bg-transparent">
                    <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                        <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                            <div className="icon p-2 me-2">
                                <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: 30, height: 30 }} />
                            </div>
                            <h1 className="m-0 text-primary">Makaan</h1>
                        </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <div className="navbar-nav ms-auto">
                                <a href="index.html" className="nav-item nav-link active">Home</a>
                                <a href="about.html" className="nav-item nav-link">About</a>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="property-list.html" className="dropdown-item">Property List</a>
                                        <a href="property-type.html" className="dropdown-item">Property Type</a>
                                        <a href="property-agent.html" className="dropdown-item">Property Agent</a>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                        <a href="404.html" className="dropdown-item">404 Error</a>
                                    </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">Contact</a>
                            </div>
                            <a href className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                        </div>
                    </nav>
                </div>
                {/* Navbar End */}
                {/* Header Start */}
                <div className="container-fluid header bg-white p-0">
                    <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div className="col-md-6 p-5 mt-lg-5">
                            <h1 className="display-5 animated fadeIn mb-4">Find A <span className="text-primary">Perfect Home</span> To Live With Your Family</h1>
                            <p className="animated fadeIn mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet
                                sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                            <a href className="btn btn-primary py-3 px-5 me-3 animated fadeIn">Get Started</a>
                        </div>
                        <div className="col-md-6 animated fadeIn">
                            <OwlCarousel {...carouselOptions} className="owl-carousel header-carousel">
                                <div className="owl-carousel-item">
                                    <img className="img-fluid" src="img/carousel-1.jpg" alt />
                                </div>
                                <div className="owl-carousel-item">
                                    <img className="img-fluid" src="img/carousel-2.jpg" alt />
                                </div>
                            </OwlCarousel >
                        </div>
                    </div>
                </div>
                {/* Header End */}

                {/* Search Start */}
                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: 35 }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option selected>Property Type</option>
                                            <option value={1}>Property Type 1</option>
                                            <option value={2}>Property Type 2</option>
                                            <option value={3}>Property Type 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option selected>Location</option>
                                            <option value={1}>Location 1</option>
                                            <option value={2}>Location 2</option>
                                            <option value={3}>Location 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search End */}

            </div>
        </div>
    );
}

export default Header;