import { NavLink, Outlet } from "react-router-dom"

export const HomeLayout=()=>{
    return (
        <div>
              {/* Topbar Start */}
  <div className="container-fluid py-2 border-bottom d-none d-lg-block">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
          <div className="d-inline-flex align-items-center">
            <a className="text-decoration-none text-body pe-3" href><i className="bi bi-telephone me-2" />+91 8595040055</a>
            <span className="text-body">|</span>
            <a className="text-decoration-none text-body px-3" href><i className="bi bi-envelope me-2" />divinecares01@gmail.com</a>
            <span className="text-body">|</span>
            <NavLink className="text-decoration-none text-body px-3" to="blogs"><i class="fas fa-disease me-2"></i>Blogs</NavLink>
          </div>
        </div>
        <div className="col-md-6 text-center text-lg-end">
          <div className="d-inline-flex align-items-center">
            <a className="text-body px-2" href="https://www.facebook.com/divinehomoeocare">
              <i className="fab fa-facebook-f" />
            </a>
            <a className="text-body px-2" href="https://www.linkedin.com/company/divine-homoeo-care/">
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="text-body px-2" href="https://www.instagram.com/divine.hcare/">
              <i className="fab fa-instagram" />
            </a>
            <a className="text-body ps-2" href="https://www.youtube.com/@DivineHomoeoCare">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Topbar End */}
  {/* Navbar Start */}
  <div className="container-fluid sticky-top bg-white shadow-sm">
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <a href="/" className="navbar-brand">
          <h1 className="m-0 text-uppercase text-primary">
            {/* <i className="fa fa-clinic-medical me-2" /> */}
            <img src="/logo.svg" width={60} alt="" />
            Divine Homoeo Care</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="treatment" className="nav-item nav-link">Treatments</NavLink>
            
            <NavLink to="service" className="nav-item nav-link">Services</NavLink>
            {/* <NavLink to="pricing" className="nav-item nav-link">Pricing</NavLink> */}
            <NavLink to="appointment" className="nav-item nav-link">Appointment</NavLink>
            <NavLink to="tests" className="nav-item nav-link">Tests</NavLink>
            {/* <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <a href="blog.html" className="dropdown-item">Blog Grid</a>
                <a href="detail.html" className="dropdown-item">Blog Detail</a>
                <a href="team.html" className="dropdown-item">The Team</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="appointment.html" className="dropdown-item">Appointment</a>
                <a href="search.html" className="dropdown-item">Search</a>
              </div>
            </div> */}
            <NavLink to="about" className="nav-item nav-link">About</NavLink>
            <NavLink to="contact" className="nav-item nav-link">Contact</NavLink>
            
          </div>
        </div>
      </nav>
    </div>
  </div>
  {/* Navbar End */}

  <Outlet />

    {/* Footer Start */}
    <div className="container-fluid bg-dark text-light mt-5 py-5">
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Gurugram</h4>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />Mata Chowk, Dhani road, wazirabad, Sector 52, Gurgaon</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />divinecares01@gmail.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3" />+91 8595 0400 55</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Raipur</h4>
          <p className="mb-2"><i className="fa fa-map-marker-alt text-primary me-3" />Mahavir Nagar, Near Anmol super market, Shyam Nagar, Raipur</p>
          <p className="mb-2"><i className="fa fa-envelope text-primary me-3" />divinecares01@gmail.com</p>
          <p className="mb-0"><i className="fa fa-phone-alt text-primary me-3" />+91 8595040055</p>
        </div>

        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Quick Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <NavLink className="text-light mb-2" to="/"><i className="fa fa-angle-right me-2" />Home</NavLink>
            <NavLink className="text-light mb-2" to="about"><i className="fa fa-angle-right me-2" />About Us</NavLink>
            <NavLink className="text-light mb-2" to="service"><i className="fa fa-angle-right me-2" />Our Services</NavLink>
            <NavLink className="text-light mb-2" to="contact"><i className="fa fa-angle-right me-2" />Contact Us</NavLink>
            <NavLink className="text-light mb-2" to="career"><i className="fa fa-angle-right me-2" />Career</NavLink>
            <NavLink className="text-light mb-2" to="terms-conditions"><i className="fa fa-angle-right me-2" />Terms and Conditions</NavLink>
            <NavLink className="text-light mb-2" to="privacy-policy"><i className="fa fa-angle-right me-2" />Privacy Policy</NavLink>
            <NavLink className="text-light" to="refund-policy"><i className="fa fa-angle-right me-2" />Refund Policy</NavLink>
            <NavLink className="text-light" to="gallery"><i className="fa fa-angle-right me-2" />Gallery</NavLink>
            <NavLink className="text-light" to="blogs"><i className="fa fa-angle-right me-2" />Blogs</NavLink>
          </div>
        </div>
        {/* <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Popular Links</h4>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Home</a>
            <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />About Us</a>
            <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Our Services</a>
            <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Meet The Team</a>
            <a className="text-light mb-2" href="#"><i className="fa fa-angle-right me-2" />Latest Blog</a>
            <a className="text-light" href="#"><i className="fa fa-angle-right me-2" />Contact Us</a>
          </div>
        </div> */}
        <div className="col-lg-3 col-md-6">
          <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 border-secondary mb-4">Follow Us</h4>

          <div className="d-flex">
            {/* <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>

             */}
                        <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.facebook.com/divinehomoeocare"><i className="fab fa-facebook-f" /></a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.instagram.com/divine.hcare/"><i className="fab fa-instagram" /></a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2" href="https://www.linkedin.com/company/divine-homoeo-care/"><i className="fab fa-linkedin-in" /></a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-2 text-center" href="https://www.youtube.com/@DivineHomoeoCare"><i className="fab fa-youtube" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-dark text-light border-top border-secondary py-4">
    <div className="container">
      <div className="row g-5">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-md-0">© <a className="text-primary" href="#">Divine Homoeo Care</a>. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
        </div>
    )
}