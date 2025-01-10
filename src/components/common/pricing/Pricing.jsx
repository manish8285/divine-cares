import { useEffect } from 'react';
import PilesImage from './../../../assets/img/piles.png'
import HairfallImage from './../../../assets/img/hairfall.webp'
import KidneyStoneImage from './../../../assets/img/kidneystone.jpg'
import LeucodermaImage from './../../../assets/img/leucoderma.jpg'
import TumorImage from './../../../assets/img/tumor.jpg'





export const Pricing=()=>{

        useEffect(() => {
              // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });
        }, []);

    return (
        <>
          {/* Pricing Plan Start */}
  <div className="container-fluid py-5">
  <div className="container">
    <div className="text-center mx-auto mb-5" style={{maxWidth: 500}}>
      <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Medical Packages</h5>
      <h1 className="display-4">Awesome Medical Programs</h1>
    </div>
    <div className="owl-carousel price-carousel position-relative" style={{padding: '0 45px 45px 45px'}}>
      <div className="bg-light rounded text-center">
        <div className="position-relative">
          <img className="img-fluid rounded-top" src={PilesImage} alt />
          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{background: 'rgba(29, 42, 77, .8)'}}>
            <h3 className="text-white">Piles</h3>
            <h1 className="display-4 text-white mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
  <small className="align-top fw-normal" style={{fontSize: 22, marginRight: 5}}>Rs</small>
  <span style={{fontSize: 36, fontWeight: 'bold'}}>1000</span>
  <small className="align-bottom fw-normal" style={{fontSize: 16, marginLeft: 5,alignSelf: 'flex-end',marginBottom:'10px'}}>/ 15days</small>
</h1>
          </div>
        </div>
        <div className="text-center py-5">
          <p>Piles Treatment</p>
          <p>Effective Homoeopathic medicine</p>
          <p>Free doctor consultation on every visit</p>
          <p>24x7 Call Support</p>
          <a href className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
        </div>
      </div>
      <div className="bg-light rounded text-center">
        <div className="position-relative">
          <img className="img-fluid rounded-top" src={KidneyStoneImage} alt />
          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{background: 'rgba(29, 42, 77, .8)'}}>
            <h3 className="text-white">Kidney Stone</h3>
            <h1 className="display-4 text-white mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
  <small className="align-top fw-normal" style={{fontSize: 22, marginRight: 5}}>Rs</small>
  <span style={{fontSize: 36, fontWeight: 'bold'}}>1500</span>
  <small className="align-bottom fw-normal" style={{fontSize: 16, marginLeft: 5,alignSelf: 'flex-end',marginBottom:'10px'}}>/ 15days</small>
</h1>
          </div>
        </div>
        <div className="text-center py-5">
        <p>Kidney Stone Treatment</p>
          <p>Effective Homoeopathic medicine</p>
          <p>Free doctor consultation on every visit</p>
          <p>24x7 Call Support</p>
          <a href className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
        </div>
      </div>
      <div className="bg-light rounded text-center">
        <div className="position-relative">
          <img className="img-fluid rounded-top" src={HairfallImage} alt />
          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{background: 'rgba(29, 42, 77, .8)'}}>
            <h3 className="text-white">Hair Fall</h3>
            <h1 className="display-4 text-white mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
  <small className="align-top fw-normal" style={{fontSize: 22, marginRight: 5}}>Rs</small>
  <span style={{fontSize: 36, fontWeight: 'bold'}}>1000</span>
  <small className="align-bottom fw-normal" style={{fontSize: 16, marginLeft: 5,alignSelf: 'flex-end',marginBottom:'10px'}}>/ 15days</small>
</h1>
          </div>
        </div>
        <div className="text-center py-5">
        <p>Hair Fall Treatment</p>
          <p>Effective Homoeopathic medicine</p>
          <p>Free doctor consultation on every visit</p>
          <p>24x7 Call Support</p>
          <a href className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
        </div>
      </div>
      <div className="bg-light rounded text-center">
        <div className="position-relative">
          <img className="img-fluid rounded-top" src={TumorImage} alt />
          <div className="position-absolute w-100 h-100 top-50 start-50 translate-middle rounded-top d-flex flex-column align-items-center justify-content-center" style={{background: 'rgba(29, 42, 77, .8)'}}>
            <h3 className="text-white">Tumor</h3>
            <h1 className="display-4 text-white mb-0" style={{display: 'flex', alignItems: 'flex-start'}}>
  <small className="align-top fw-normal" style={{fontSize: 22, marginRight: 5}}>Rs</small>
  <span style={{fontSize: 36, fontWeight: 'bold'}}>1000</span>
  <small className="align-bottom fw-normal" style={{fontSize: 16, marginLeft: 5,alignSelf: 'flex-end',marginBottom:'10px'}}>/ 15days</small>
</h1>
          </div>
        </div>
        <div className="text-center py-5">
        <p>Tumor Treatment</p>
          <p>Effective Homoeopathic medicine</p>
          <p>Free doctor consultation on every visit</p>
          <p>24x7 Call Support</p>
          <a href className="btn btn-primary rounded-pill py-3 px-5 my-2">Apply Now</a>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Pricing Plan End */}
</>
    )
}