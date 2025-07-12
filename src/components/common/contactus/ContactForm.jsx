import { useState } from "react"
import { contactApi } from "../../../api"
import { toast } from "react-toastify"

export const ContactForm=()=>{
    const [contactData, setContactData]  = useState({})
    const [processing,setProcessing] = useState(false) 

    const submitHandler=async()=>{
        setProcessing(true)
        console.log(contactData)
        try{
        const response= await contactApi(contactData)
        toast.success(response.message)
        }catch(error){
            console.log(error)
            toast.error(error.response.data.message)

        }
        setProcessing(false)
    }
    return (
        <form>
            <div className="row g-3">
              <div className="col-12 col-sm-6">
                <input onChange={(event)=>setContactData({...contactData,"name":event.target.value})} value={contactData.name} type="text" className="form-control bg-light border-0" placeholder="Your Name" style={{height: 55}} />
              </div>
              <div className="col-12 col-sm-6">
                <input onChange={(event)=>setContactData({...contactData,"email":event.target.value})} value={contactData.email} type="email" className="form-control bg-light border-0" placeholder="Your Email" style={{height: 55}} />
              </div>
              <div className="col-12">
                <input onChange={(event)=>setContactData({...contactData,"subject":event.target.value})} value={contactData.subject} type="text" className="form-control bg-light border-0" placeholder="Subject" style={{height: 55}} />
              </div>
              <div className="col-12">
                <textarea onChange={(event)=>setContactData({...contactData,"message":event.target.value})} value={contactData.message} className="form-control bg-light border-0" rows={5} placeholder="Message" defaultValue={""} />
              </div>
              <div className="col-12">
                <button disabled={processing} onClick={()=>submitHandler()} className="btn btn-primary w-100 py-3" type="button">{processing?"Sending message ...":"Send Message"}</button>
              </div>
            </div>
        </form>
    )
}