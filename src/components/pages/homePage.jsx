import { NavLink } from "react-router-dom"
import { AboutUs, Appointment, Blogs, Gallery, Pricing, SEO, Services, Teams, Testimonial, Treatments } from "../common"

export const HomePage=()=>{

  const homeSeo = {
    title: "Home | Divine Homoeo Care",
    description: "Best homoeopathic treatments for kidney stones, skin diseases, and more without surgery.",
    keywords: "kidney stone, skin diseases, depression, homoeopathy, Divine Homoeo Care",
    url: "https://www.divinehomoeocare.com/",
    image: "https://www.divinehcare.com/assets/about-DOplnLKc.png",
  };

    return (
<div>

<SEO {...homeSeo}  />

  {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 mb-5 hero-header">
    <div className="container py-5">
      <div className="row justify-content-start">
        <div className="col-lg-8 text-center text-lg-start">
          <h5 className="d-inline-block text-black text-uppercase border-bottom border-5 bg-white" style={{borderColor: 'rgba(256, 256, 256, .3) !important'}}>Share your problem with doctor</h5>
          <h1 className="display-1 text-white mb-md-4">Cure with Homoeopathic</h1>
          <div className="pt-2">
            <NavLink to="service" className="btn btn-light rounded-pill py-md-3 px-md-5 mx-2">Find Services</NavLink>
            <NavLink to="appointment" className="btn btn-outline-light rounded-pill py-md-3 px-md-5 mx-2"  >Book Appointment</NavLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Hero End */}

 <Treatments />


<Services />
<AboutUs />
<Appointment />

{/* <Pricing /> */}

{/* <Teams /> */}

<Testimonial />

<Gallery />

{/* <Blogs /> */}

</div>

)
}

