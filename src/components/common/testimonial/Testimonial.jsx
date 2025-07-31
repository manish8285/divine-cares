import { useEffect } from "react"
import Pic1 from './../../../assets/img/testimonial-1.jpg'
import Pic2 from './../../../assets/img/testimonial-2.jpg'
import Pic3 from './../../../assets/img/testimonial-3.jpg'
import ReactPlayer from 'react-player'

const testimonials = [
  {url:'https://youtu.be/q7VIeJAm3gU?si=FuUNZ73E_4tUzyEd'},
  {url:'https://youtu.be/CLi5RfEJOQ8?si=uHQ2Td_EvIgB21fT'},
  {url:'https://youtube.com/shorts/actW72ynPAo?si=OaP9yyOxxnawbC3p'},
  {url:'https://youtube.com/shorts/Bi-SNoRByno?si=Bvd1jSyb4D1-dSBE'},
  {url:'https://youtube.com/shorts/PHVCNaP6gQU?si=YvpmydBIq41VrTaZ'},
  {url:'https://youtu.be/q7VIeJAm3gU?si=FuUNZ73E_4tUzyEd'}
]

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
        <h1 className="display-4">Why We Need Homomeopathic</h1>
      </div>

      <div className="row g-5">
        {
          testimonials.map((item,index)=>(
            <div key={index} className="col-lg-4 col-md-6">
          <ReactPlayer src={item.url} />
        </div>
          ))
        }
      </div>
    </div>
  </div>
  {/* Testimonial End */}
        </>
    )
}