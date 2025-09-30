import { NavLink } from "react-router-dom"

export const TopBar=()=>{
    return (
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
    )
}