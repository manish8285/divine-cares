import { ContactForm } from "../common"

export const ContactPage=()=>{
    return (
        <>
        

{/* Contact Start */}
<div className="container-fluid pt-5">
  <div className="container">
    <div className="text-center mx-auto mb-5" style={{maxWidth: 500}}>
      <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Any Questions?</h5>
      <h1 className="display-4">Please Feel Free To Contact Us</h1>
    </div>
    <div className="row g-5 mb-5">
      <div className="col-lg-3">
        <div className="px-1 bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: 200}}>
          <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: 100, height: 70, transform: 'rotate(-15deg)'}}>
            <i className="fa fa-2x fa-location-arrow text-white" style={{transform: 'rotate(15deg)'}} />
          </div>
          <h6 className="mb-0">Divine Homoeo Care, Matachowk, Dhani Road, Wazirabad, Sector 52, Gurgaon </h6>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="px-1 bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: 200}}>
          <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: 100, height: 70, transform: 'rotate(-15deg)'}}>
            <i className="fa fa-2x fa-location-arrow text-white" style={{transform: 'rotate(15deg)'}} />
          </div>
          <h6 className="mb-0">Divine Homoeo Care, Shop no 3, Mahavir Nagar, Raipur </h6>
        </div>
      </div>

      <div className="col-lg-3">
        <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: 200}}>
          <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: 100, height: 70, transform: 'rotate(-15deg)'}}>
            <i className="fa fa-2x fa-phone text-white" style={{transform: 'rotate(15deg)'}} />
          </div>
          <h6 className="mb-0">+91 8595 0400 55</h6>
        </div>
      </div>
      <div className="col-lg-3">
        <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{height: 200}}>
          <div className="d-flex align-items-center justify-content-center bg-primary rounded-circle mb-4" style={{width: 100, height: 70, transform: 'rotate(-15deg)'}}>
            <i className="fa fa-2x fa-envelope-open text-white" style={{transform: 'rotate(15deg)'}} />
          </div>
          <h6 className="mb-0">divinecares01@gmail.com</h6>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-12" style={{height: 500}}>
        <div className="position-relative h-100">
          <iframe className="position-relative w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7016.851086626612!2d77.07843914605138!3d28.436585787457425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d198ebdc7659b%3A0x9af47251f7cfd2eb!2sDivine%20Homoeo%20Care!5e0!3m2!1sen!2sin!4v1736427792459!5m2!1sen!2sin" frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
        </div>
      </div>
    </div>
    <div className="row justify-content-center position-relative" style={{marginTop: '-200px', zIndex: 1}}>
      <div className="col-lg-8">
        <div className="bg-white rounded p-5 m-5 mb-0">
          <ContactForm />
        </div>
      </div>
    </div>
  </div>
</div>
{/* Contact End */}

        </>
    )
}