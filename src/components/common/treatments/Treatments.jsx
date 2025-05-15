import KidneyStone from './../../../assets/img/kidneyStone.png'
import PilesLogo from './../../../assets/img/pilesLogo.png'
import LipomaLogo from './../../../assets/img/lipomaLogo.png'
import VitiligoLogo from './../../../assets/img/vitiligoLogo.png'
import HairfallLogo from './../../../assets/img/hairfallLogo.png'
import TumorLogo from './../../../assets/img/tumorLogo.png'
import PsoriasisLogo from './../../../assets/img/psoriasisLogo.png'
import JointpainLogo from './../../../assets/img/jointpainLogo.png'
import PitriyasisLogo from './../../../assets/img/pitriyasisLogo.png'


export const Treatments=()=>{
    return (
        <>
          {/* Services Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="text-center mx-auto mb-5" style={{maxWidth: 500}}>
        <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Specialized </h5>
        <h1 className="display-4">Treatments</h1>
      </div>
      <div className="row g-5">


        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <div className='mb-3'>
          <img height={250}  src={KidneyStone} alt="kidney stone" />
          <h4 className="mb-3">Kidney Stone</h4>
          </div>  
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <img height={250}  src={PilesLogo} alt="kidney stone" />
          <h4 className="mb-3">Piles</h4>
          
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          
          <img height={250}  src={LipomaLogo} alt="kidney stone" />
          <h4 className="mb-3">Lipoma</h4>
          
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          
          <img height={250}  src={VitiligoLogo} alt="kidney stone" />
          <h4 className="mb-3">Vitiligo</h4>
          
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          
          <img height={250}  src={HairfallLogo} alt="kidney stone" />
          <h4 className="mb-3">Hair fall</h4>
          
          </div>
        </div>

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          
          <img height={250}  src={TumorLogo} alt="kidney stone" />
          <h4 className="mb-3">Tumor</h4>
          
          </div>
        </div>    

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <img height={250}  src={PsoriasisLogo} alt="kidney stone" />
          <h4 className="mb-3">Psoriasis</h4>
          </div>
        </div>      

        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <img height={250}  src={JointpainLogo} alt="kidney stone" />
          <h4 className="mb-3">Joint pain</h4>
          </div>
        </div>   
        
        <div className="col-lg-4 col-md-6 p-3">
          <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
          <img height={250}  src={PitriyasisLogo} alt="kidney stone" />
          <h4 className="mb-3">Pityriasis</h4>
          </div>
        </div> 

      </div>
    </div>
  </div>
  {/* Services End */}
        </>
    )
}