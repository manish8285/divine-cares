import AboutImage from './../../../assets/img/about.png'
export const AboutUs=()=>{



    return (
        <>
          {/* About Start */}
  <div className="container-fluid py-5">
  <div className="container">
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: 500}}>
        <div className="position-relative h-100">
          <img className="position-absolute w-100 h-100 rounded" src={AboutImage} style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-lg-7">
        <div className="mb-4">
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">About Us</h5>
          <h1 className="display-4">Divine Homoeo Care</h1>
        </div>
        <p>We are a dedicated team committed to revolutionizing healthcare through holistic healing practices. With a foundation rooted in homeopathy, we offer innovative solutions tailored to each individual's unique needs. Our expertise spans diagnostics, treatment, and ongoing care, all aimed at providing a seamless and effective journey toward total wellness. At our core, we prioritize patient empowerment, fostering a supportive environment where individuals can reclaim control of their health and thrive. With years of experience and a passion for transformative healthcare, we stand as leaders in our field, dedicated to guiding our community toward a healthier, happier future.</p>
        <div className="row g-3 pt-3">
          <div className="col-sm-3 col-6">
            <div className="bg-light text-center rounded-circle py-4">
              <i className="fa fa-3x fa-user-md text-primary mb-3" />
              <h6 className="mb-0">Qualified<small className="d-block text-primary">Doctors</small></h6>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="bg-light text-center rounded-circle py-4">
              <i className="fas fa-3x fa-mortar-pestle text-primary mb-3" />
              <h6 className="mb-0">Homoeopathic<small className="d-block text-primary">Medicine</small></h6>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="bg-light text-center rounded-circle py-4">
              <i className="fa fa-3x fa-microscope text-primary mb-3" />
              <h6 className="mb-0">Blood<small className="d-block text-primary">Testing</small></h6>
            </div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="bg-light text-center rounded-circle py-4">
              <i className="fa-3x fas fa-stethoscope text-primary mb-3" />
              <h6 className="mb-0">Online Doctor<small className="d-block text-primary">Consultation</small></h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* About End */}
</>
    )
}