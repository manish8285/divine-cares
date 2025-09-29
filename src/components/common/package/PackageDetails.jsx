import { useEffect, useState } from "react";
import { PriceDetails } from "./PriceDetails";
import { OtherPackages } from "./OtherPackages";
import { PackageForm } from "./PackageForm";
import { ReplyForm } from "./ReplyForm";
import PACKAGES from "./packages.json"
import { useParams } from "react-router-dom";
const IMAGE_URL = import.meta.env.VITE_IMAGE_URL



export const PackageDetails = () => {
    const params = useParams()
    const packageid = params.url
    const [packageData,setPackageData] = useState({images:[],faq:[]})

    const [isDataLoaded, setIsDataLoaded] = useState(false); // New state to track data loading

    const getPackage=()=>{
        // Use the imported data directly instead of fetching
        const package_data = PACKAGES.filter((item)=>item.id==packageid)
        setPackageData(package_data[0])
        setIsDataLoaded(true); // Data is loaded immediately
        console.log(package_data)
    }
    
    
    // First useEffect to fetch data when the component mounts
    useEffect(() => {
        getPackage();
    }, []);

    // Second useEffect to initialize Owl Carousel only after data is loaded
    useEffect(() => {
        if (isDataLoaded) {
            // Check if the carousel element exists and destroy any previous instance
            const carouselElement = $(".single-carousel");
            if (carouselElement.hasClass('owl-loaded')) {
                carouselElement.trigger('destroy.owl.carousel');
            }
            
            // Initialize the carousel
            carouselElement.owlCarousel({
                autoplay: true,
                smartSpeed: 1500,
                dots: true,
                dotsData: true,
                loop: true,
                items: 1,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>',
                ],
            });
        }
    }, [isDataLoaded]);


  return (
    <>
      <div>
        {/* Single Products Start */}
        <div className="container-fluid shop py-5">
          <div className="container py-5">
            <div className="row g-4">
              <div
                className="col-lg-7 col-xl-9 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="row g-4 single-product">
                  <div className="col-xl-6">
                    <div className="single-carousel owl-carousel">

                        {
                            packageData.images?.map((img,index)=>(
                                <div
                                    key={index}
                                    className="single-item"
                                    data-dot={`<img class='img-fluid' src=${IMAGE_URL+img} alt=''>`}
                                >
                                    <div className="single-inner bg-light rounded">
                                    <img
                                        src={IMAGE_URL+img}
                                        className="img-fluid rounded"
                                        alt="Image"
                                    />
                                    </div>
                                </div>

                            ))
                        }


                    </div>
                  </div>
                  <div className="col-xl-6">
                    <h4 className="fw-bold mb-3">{packageData.title}</h4>
                    <p className="mb-3">Starts From</p>
                    <h5 className="fw-bold mb-3">
                      Rs.{packageData.startingPrice}/-{" "}
                    </h5>
                    <div className="d-flex mb-4">
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star text-secondary" />
                      <i className="fa fa-star" />
                    </div>
                    <div className="mb-3">
                      {/* Facebook Share */}
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary d-inline-block rounded text-white py-1 px-4 me-2"
                      >
                        <i className="fab fa-facebook-f me-1" /> Share
                      </a>

                      {/* WhatsApp Share */}
                      <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                          window.location.href
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success d-inline-block rounded text-white py-1 px-4 ms-2"
                      >
                        <i className="fab fa-whatsapp me-1" /> Share
                      </a>
                    </div>
                    <div className="d-flex flex-column mb-3">
                      <small>Product SKU: N/A</small>
                      <small>
                        Available:{" "}
                        <strong className="text-primary">All Over India</strong>
                      </small>
                    </div>

                    {/* product short description */}
                    <div>
                      <p> {packageData.sortDescription} </p>
                    </div>

                    {/* <div className="input-group quantity mb-5" style={{width: 100}}>
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-minus rounded-circle bg-light border">
                    <i className="fa fa-minus" />
                  </button>
                </div>
                <input type="text" className="form-control form-control-sm text-center border-0" defaultValue={1} />
                <div className="input-group-btn">
                  <button className="btn btn-sm btn-plus rounded-circle bg-light border">
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div> */}

                    <a
                      href="#packageFormContainer"
                      className="btn btn-warning rounded-pill py-md-3 px-md-5 mx-2 w-full"
                    >
                      Buy Now
                    </a>
                  </div>
                  <div className="col-lg-12">
                    <nav>
                      <div className="nav nav-tabs mb-3">
                        <button
                          className="nav-link active border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-about-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-about"
                          aria-controls="nav-about"
                          aria-selected="true"
                        >
                          Description
                        </button>
                        <button
                          className="nav-link border-white border-bottom-0"
                          type="button"
                          role="tab"
                          id="nav-mission-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-mission"
                          aria-controls="nav-mission"
                          aria-selected="false"
                        >
                          FAQ (Frequiently Asked Questions)
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mb-5">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: packageData.description,
                        }}
                        className="tab-pane active"
                        id="nav-about"
                        role="tabpanel"
                        aria-labelledby="nav-about-tab"
                      >
                        {/* package description start */}

                        {/* package description end here */}
                      </div>
                      <div
                        className="tab-pane"
                        id="nav-mission"
                        role="tabpanel"
                        aria-labelledby="nav-mission-tab"
                      >
                        <div className="">
                          {packageData.faq?.map((item, index) => (
                            <div className>
                              <div className="d-flex justify-content-between">
                                <h5 className="text-primary">
                                  <b className="text-dark">Ques. </b>{" "}
                                  {item.question}
                                </h5>
                              </div>
                              <p>
                                <b>Ans. </b> {item.answer}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                      {/* <div className="tab-pane" id="nav-vision" role="tabpanel">
                  <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam
                    amet diam et eos labore. 3</p>
                  <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore.
                    Clita erat ipsum et lorem et sit</p>
                </div> */}
                    </div>
                  </div>

                  {/* <ReplyForm /> */}
                </div>
              </div>

              <div
                className="col-lg-5 col-xl-3 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <PriceDetails total={packageData.startingPrice} />


                {/* <div className="additional-product mb-4">
                  <h4>Select Duration</h4>
                  <div className="additional-product-item">
                    <input
                      type="radio"
                      className="me-2"
                      id="Categories-1"
                      name="Categories-1"
                      defaultValue="Beverages"
                    />
                    <label htmlFor="Categories-1" className="text-dark">
                      {" "}
                      15 Days
                    </label>
                  </div>
                  <div className="additional-product-item">
                    <input
                      type="radio"
                      className="me-2"
                      id="Categories-2"
                      name="Categories-1"
                      defaultValue="Beverages"
                    />
                    <label htmlFor="Categories-2" className="text-dark">
                      {" "}
                      1 Month
                    </label>
                  </div>
                </div> */}

              </div>
            </div>
            <div className="row g-4">
              <div
                id="packageFormContainer"
                className="col-lg-6 col-xl-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <PackageForm title={packageData.title} duration={null} />
              </div>
              <div
                className="col-lg-6 col-xl-6 wow fadeInUp"
                data-wow-delay="0.1s"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
