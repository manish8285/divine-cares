import { NavLink } from "react-router-dom"
import { AboutUs, Appointment, Blogs, Gallery, Hero, Pricing, Products, SEO, Services, Teams, Testimonial, Treatments } from "../common"

export const HomePage=()=>{

  const homeSeo = {
    title: "Home | Divine Homoeo Care",
    description: "Best homoeopathic treatments for kidney stones, skin diseases, and more without surgery.",
    keywords: "kidney stone, skin diseases, depression, homoeopathy, Divine Homoeo Care",
    url: "https://www.divinehcare.com/",
    image: "https://www.divinehcare.com/assets/about-DOplnLKc.png",
  };

    return (
<div>

<SEO {...homeSeo}  />

  {/* Hero Start */}
  {/* <Hero /> */}
  {/* Hero End */}

 <Treatments />
 <Products />

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

