import { Appointment, SEO, Services } from "../common"

// seoConfig.js
export const seoData = {
    services: {
      title: "Services | Divine Homoeo Care",
      description:
        "Explore our wide range of excellent medical services including homoeopathic consultation, diagnostic tests, 24/7 call support, ambulance service, pharmacy, and blood testing facilities.",
      keywords:
        "homoeopathy services, medical consultation, diagnostic tests, ambulance service, pharmacy, blood testing, Divine Homoeo Care",
      url: "https://www.divinehomeocare.com/service"
    },
  };
  

export const ServicePage=()=>{
    return (
        <>
            <SEO {...seoData} />
            <Services />

            <Appointment />
        </>
    )
}