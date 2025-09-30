import { AboutUs, Appointment, SEO, Teams } from "../common"

const aboutSeo = {
    title: "About Us | Divine Homoeo Care",
    description:
      "Discover the legacy of Divine Homoeo Care, a trusted name in homeopathy since the 20th century. Founded by Lt. Shree Dr. Lakshmi Narayan Shastri, carried forward by generations, today led by Dr. Sweta and her team—delivering compassionate, affordable, and holistic homeopathic care.",
    keywords:
      "About Divine Homoeo Care, Homeopathy legacy, Dr. Lakshmi Narayan Shastri, Dr. Sweta, trusted homeopathy, compassionate healthcare, affordable homeopathy, holistic treatment",
    url: "https://www.divinehcare.com/about",
    image: "https://www.divinehcare.com/assets/about-DOplnLKc.png",
  };
  

export const AboutPage=()=>{



    return (

    

<div>

<SEO {...aboutSeo} />
<AboutUs />


<Teams />

<Appointment />

</div>
)
}