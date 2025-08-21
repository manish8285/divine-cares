export const SingleBlog=()=>{
    return (
        <>
{/* Blog Start */}
<div className="container py-5">
  <div className="row g-5">
    <div className="col-lg-8">
      {/* Blog Detail Start */}
      <div className="mb-5">
        <img className="img-fluid w-100 rounded mb-5" src="img/blog-2.jpg" alt />
        <h1 className="mb-4">Diam dolor est labore duo ipsum clita sed et lorem tempor sanctus lorem kasd duo</h1>
        <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
          magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
          amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
          sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
          aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
          sit stet no diam kasd vero.</p>
        <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
          vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
          nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
          ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
          clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
          justo dolore sit invidunt.</p>
        <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
          invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
          lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
          rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
          sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
          lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
          sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos.</p>
        <div className="d-flex justify-content-between bg-light rounded p-4 mt-4 mb-4">
          <div className="d-flex align-items-center">
            <img className="rounded-circle me-2" src="img/user.jpg" width={40} height={40} alt />
            <span>John Doe</span>
          </div>
          <div className="d-flex align-items-center">
            <span className="ms-3"><i className="far fa-eye text-primary me-1" />12345</span>
            <span className="ms-3"><i className="far fa-comment text-primary me-1" />123</span>
          </div>
        </div>
      </div>
      {/* Blog Detail End */}

    </div>
    {/* Sidebar Start */}
    <div className="col-lg-4">

      {/* Recent Post Start */}
      <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">Recent Post</h4>
        <div className="d-flex rounded overflow-hidden mb-3">
          <img className="img-fluid" src="img/blog-1.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
          <a href className="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet consec adipis elit
          </a>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <img className="img-fluid" src="img/blog-2.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
          <a href className="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet consec adipis elit
          </a>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <img className="img-fluid" src="img/blog-3.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
          <a href className="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet consec adipis elit
          </a>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <img className="img-fluid" src="img/blog-1.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
          <a href className="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet consec adipis elit
          </a>
        </div>
        <div className="d-flex rounded overflow-hidden mb-3">
          <img className="img-fluid" src="img/blog-2.jpg" style={{width: 100, height: 100, objectFit: 'cover'}} alt />
          <a href className="h5 d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet consec adipis elit
          </a>
        </div>
      </div>
      {/* Recent Post End */}
      {/* Image Start */}
      <div className="mb-5">
        <img src="img/blog-1.jpg" alt className="img-fluid rounded" />
      </div>
      {/* Image End */}
      {/* Tags Start */}
      <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">Tag Cloud</h4>
        <div className="d-flex flex-wrap m-n1">
          <a href className="btn btn-primary m-1">Design</a>
          <a href className="btn btn-primary m-1">Development</a>
          <a href className="btn btn-primary m-1">Marketing</a>
          <a href className="btn btn-primary m-1">SEO</a>
          <a href className="btn btn-primary m-1">Writing</a>
          <a href className="btn btn-primary m-1">Consulting</a>
          <a href className="btn btn-primary m-1">Design</a>
          <a href className="btn btn-primary m-1">Development</a>
          <a href className="btn btn-primary m-1">Marketing</a>
          <a href className="btn btn-primary m-1">SEO</a>
          <a href className="btn btn-primary m-1">Writing</a>
          <a href className="btn btn-primary m-1">Consulting</a>
        </div>
      </div>
      {/* Tags End */}

    </div>
    {/* Sidebar End */}
  </div>
</div>
{/* Blog End */}


        </>
    )
}