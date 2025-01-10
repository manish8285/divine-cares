import { useEffect } from "react"
import Pic1 from './../../../assets/img/testimonial-1.jpg'
import Pic2 from './../../../assets/img/testimonial-2.jpg'
import Pic3 from './../../../assets/img/testimonial-3.jpg'


export const Testimonial=()=>{

    useEffect(()=>{
            // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    },[])
    return (
        <>
          {/* Testimonial Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 500}}>
        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Testimonial</h5>
        <h1 className="display-4">Patients Say About Our Services</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="owl-carousel testimonial-carousel">
            <div className="testimonial-item text-center">
              <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle" src={Pic2} alt />
                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: 60, height: 60}}>
                  <i className="fa fa-quote-left fa-2x text-primary" />
                </div>
              </div>
              <p className="fs-4 fw-normal">I was suffering from painful piles for months, but after consulting the doctors at this clinic, I was cured within a few weeks. The homoeopathic treatment was gentle and effective. I'm grateful for their care and expertise.</p>
              <hr className="w-25 mx-auto" />
              <h3>Rohan Sharma</h3>
              <h6 className="fw-normal text-primary mb-3">Patient</h6>
            </div>
            <div className="testimonial-item text-center">
              <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle mx-auto" src={Pic1} alt />
                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: 60, height: 60}}>
                  <i className="fa fa-quote-left fa-2x text-primary" />
                </div>
              </div>
              <p className="fs-4 fw-normal">I was diagnosed with a large kidney stone and was advised surgery by other doctors. But the homoeopaths at this clinic treated me with their natural remedies, and within a few months, the stone was dissolved. I'm amazed by the power of homoeopathy!</p>
              <hr className="w-25 mx-auto" />
              <h3>Priya Kumari</h3>
              <h6 className="fw-normal text-primary mb-3">Patient</h6>
            </div>
            <div className="testimonial-item text-center">
              <div className="position-relative mb-5">
                <img className="img-fluid rounded-circle mx-auto" src={Pic3} alt />
                <div className="position-absolute top-100 start-50 translate-middle d-flex align-items-center justify-content-center bg-white rounded-circle" style={{width: 60, height: 60}}>
                  <i className="fa fa-quote-left fa-2x text-primary" />
                </div>
              </div>
              <p className="fs-4 fw-normal">I had been living with leucoderma for years, trying various treatments without success. But the doctors at this clinic gave me personalized homoeopathic treatment, and within a year, my skin started showing significant improvement. I'm thrilled with the results and highly recommend this clinic.</p>
              <hr className="w-25 mx-auto" />
              <h3>Meghna Kumari</h3>
              <h6 className="fw-normal text-primary mb-3">Patient</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Testimonial End */}
        </>
    )
}