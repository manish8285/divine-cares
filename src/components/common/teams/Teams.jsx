import { useEffect } from "react";
import Sweta from './../../../assets/img/team-3.jpg';
import Manish from './../../../assets/img/manish.jpg';

export const Teams = () => {
  useEffect(() => {
    // Ensure jQuery and OwlCarousel are available
    if (window.$ && window.$.fn.owlCarousel) {
      window.$(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          '<i class="bi bi-arrow-left"></i>',
          '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          992: {
            items: 2 // 👈 Two items per slide on desktop
          }
        }
      });
    } else {
      console.warn("Owl Carousel not loaded");
    }
  }, []);

  const teamMembers = [
    {title:"Dr. Sweta",src:Sweta,profession:"Founder",about:"Dr. Sweta is a renowned Women and Child Specialist, offering comprehensive homeopathic solutions for various chronic diseases."},
    {title:"Manish Singh",src:Manish,profession:"CEO & CTO",about:"Dedicated to delivering affordable and reliable healthcare solutions to our community with a commitment to innovation and trust."}
  ] 

  return (
    <div className="container-fluid py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
          <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Teams</h5>
          <h1 className="display-4">Qualified Healthcare Professionals</h1>
        </div>

        <div className="owl-carousel team-carousel position-relative">
          {teamMembers.map((member, i) => (
            <div className="team-item-wrapper" key={i}>
              <div className="team-item">
                <div className="row g-0 bg-light rounded overflow-hidden">
                  <div className="col-12 col-sm-5 h-100">
                    <img className="img-fluid h-100" src={member.src} style={{ objectFit: 'cover' }} alt="Dr Sweta" />
                  </div>
                  <div className="col-12 col-sm-7 h-100 d-flex flex-column">
                    <div className="mt-auto p-4">
                      <h3>{member.title}</h3>
                      <h6 className="fw-normal fst-italic text-primary mb-4">{member.profession}</h6>
                      <p className="m-0">{member.about}</p>
                    </div>
                    <div className="d-flex mt-auto border-top p-4">
                      <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-twitter" /></a>
                      <a className="btn btn-lg btn-primary btn-lg-square rounded-circle me-3" href="#"><i className="fab fa-facebook-f" /></a>
                      <a className="btn btn-lg btn-primary btn-lg-square rounded-circle" href="#"><i className="fab fa-linkedin-in" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
