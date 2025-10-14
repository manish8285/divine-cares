import KidneyStone from './../../../assets/img/kidneyStone.png'
import PilesLogo from './../../../assets/img/pilesLogo.png'
import LipomaLogo from './../../../assets/img/lipomaLogo.png'
import VitiligoLogo from './../../../assets/img/vitiligoLogo.png'
import HairfallLogo from './../../../assets/img/hairfallLogo.png'
import TumorLogo from './../../../assets/img/tumorLogo.png'
import PsoriasisLogo from './../../../assets/img/psoriasisLogo.png'
import JointpainLogo from './../../../assets/img/jointpainLogo.png'
import PitriyasisLogo from './../../../assets/img/pitriyasisLogo.png'
import SkinDisease from './../../../assets/img/skindisease.png'
import { NavLink } from 'react-router-dom'

export const Treatments = () => {
  const treatments = [
    { id:'skindisease',src: SkinDisease, title: 'Any Skin Disease' },
    { id:'kidneystone',src: KidneyStone, title: 'Kidney Stone' },
    { id:'piles',src: PilesLogo, title: 'Piles' },
    { id: 'lipoma', src: LipomaLogo, title: 'Lipoma' },
    { id:'vitiligo',src: VitiligoLogo, title: 'Vitiligo' },
    { id:'hairfall',src: HairfallLogo, title: 'Hair Fall' },
    { id:'tumor',src: TumorLogo, title: 'Tumor' },
    { id:'psoriasis',src: PsoriasisLogo, title: 'Psoriasis' },
    { id:'jointpain',src: JointpainLogo, title: 'Joint Pain' },
    { id:'skindisease',src: PitriyasisLogo, title: 'Pityriasis' }
  ]

  return (
    <>
      {/* Services Start */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 500 }}>
            <h5 className="d-inline-block text-primary text-uppercase border-bottom border-5">Our Specialized Treatments</h5>
            <h1 className="display-4">DC Care Packs</h1>
          </div>
          <div className="row g-5">
            {treatments.map((treatment, index) => (
              <div key={index} className="col-lg-4 col-md-6 p-3">
                <div className="bg-light rounded d-flex flex-column align-items-center justify-content-center text-center p-3 h-100">
                  <img src={treatment.src} alt={treatment.title} className="img-fluid mb-3" style={{ maxHeight: 200, objectFit: 'contain' }} />
                  <h4 className="mb-0">{treatment.title}</h4>
                  
                  <div>
                    <h5 className='text-primary'>Medicines + Doctor Care = Rs 1000/-</h5>
                  <NavLink to={`/package/${treatment.id}`} className="btn btn-warning rounded-pill py-md-3 px-md-5 mx-2 w-full">Buy Package</NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Services End */}
    </>
  )
}
