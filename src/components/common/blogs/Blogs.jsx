import User from './../../../assets/img/user.jpg'
import Blog from './../../../assets/img/blog-1.jpg'

const blogslist = [
  {
    title:"Dolor clita vero elitr sea stet dolor justo  diam",
    subTitle: "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    CoverImage: "lala",
    author:{name:"Dr. Sweta",profile:""},
    views:"12345",
    comments:"123"
  },
  {
    title:"Dolor clita vero elitr sea stet dolor justo  diam",
    subTitle: "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    CoverImage: "lala",
    author:{name:"Dr. Sweta",profile:""},
    views:"12345",
    comments:"123"
  },
  {
    title:"Dolor clita vero elitr sea stet dolor justo  diam",
    subTitle: "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    CoverImage: "lala",
    author:{name:"Dr. Sweta",profile:""},
    views:"12345",
    comments:"123"
  },
  {
    title:"Dolor clita vero elitr sea stet dolor justo  diam",
    subTitle: "Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna rebum clita rebum dolor stet amet justo",
    CoverImage: "lala",
    author:{name:"Dr. Sweta",profile:""},
    views:"12345",
    comments:"123"
  }
]

export const Blogs=()=>{
    return (
        <>
          {/* Blog Start */}

          
  <div className="container-fluid py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 500}}>
        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Blog Post</h5>
        <h1 className="display-4">The Diseases We Treat</h1>
      </div>
      <div className="row g-5">

      {
            blogslist.map((blog,index)=>(

              <div className="col-xl-4 col-lg-6" key={index} >
          <div className="bg-light rounded overflow-hidden">
            <img className="img-fluid w-100" src={Blog} alt />
            <div className="p-4">
              <a className="h3 d-block mb-3" href>{blog.title}</a>
              <p className="m-0">{blog.subTitle}</p>
            </div>
            <div className="d-flex justify-content-between border-top p-4">
              <div className="d-flex align-items-center">
                <img className="rounded-circle me-2" src={User} width={25} height={25} alt />
                <small>{blog.author.name}</small>
              </div>
              <div className="d-flex align-items-center">
                <small className="ms-3"><i className="far fa-eye text-primary me-1" />{blog.views}</small>
                <small className="ms-3"><i className="far fa-comment text-primary me-1" />{blog.comments}</small>
              </div>
            </div>
          </div>
        </div>
              
            ))
          }

      </div>
    </div>
  </div>
  {/* Blog End */}
        </>
    )
}