import { useEffect } from "react"
import ReactPlayer from 'react-player'

const testimonials = [
  {url:'https://www.youtube.com/shorts/sDKK4GGO9_I'},
  {url:'https://www.youtube.com/shorts/GQFhyakB_-M'},
  {url:'https://www.youtube.com/shorts/9i9f9YJ0qXM'},
  {url:'https://www.youtube.com/shorts/fZaCih8x1bE'},
  {url:'https://www.youtube.com/shorts/sDKK4GGO9_I'},
  {url:'https://www.youtube.com/shorts/GQFhyakB_-M'},
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
            <div key={index} className="col-lg-4 col-md-6 col-sm-12">
          <ReactPlayer src={item.url} controls={true} />
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