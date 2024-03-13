import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { NavLink } from 'react-router-dom';

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
                                <NavLink to="/" className="nav-item nav-link active">Home</NavLink>
                                <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                <div className="nav-item dropdown">
                                    <NavLink to="/property" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</NavLink>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <NavLink to="/propertylist" className="dropdown-item">Property List</NavLink>
                                        <NavLink to="/propertytype" className="dropdown-item">Property Type</NavLink>
                                        <NavLink to="/PropertyAgent" className="dropdown-item">Property Agent</NavLink>
                                    </div>
                                </div>
                                <div className="nav-item dropdown">
                                    <NavLink to="/pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                    <div className="dropdown-menu rounded-0 m-0">
                                        <NavLink to="/testimonial" className="dropdown-item">Testimonial</NavLink>
                                        <NavLink to="/error" className="dropdown-item">404 Error</NavLink>
                                    </div>
                                </div>
                                <NavLink to="/contect" className="nav-item nav-link">Contact</NavLink>
                            </div>
                            <a href className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                        </div>
                    </nav>
                </div>
                {/* Navbar End */}

            </div>
        </div>
    );
}

export default Header;