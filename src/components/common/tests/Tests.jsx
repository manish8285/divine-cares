import { useState } from "react";
import { NavLink } from "react-router-dom";
import { bookTestApi, makeAppointmentApi } from "../../../api";
import { toast } from "react-toastify";
import { tests } from "./testlist";


export const Tests = () => {

  const [processing,setProcessing] = useState(false) 
  const [message,setMessage] = useState()
  const [totalAmount,setTotalAmount] = useState(0)
  const [selectedTests,setSelectedTests] = useState([])
  const [testdata,setTestdata] = useState({

  })

  const submitHandler=async()=>{
    setProcessing(true)
    const finalTestData = {
      tests:selectedTests,
      totalAmount:totalAmount,
      name:testdata.name,
      age:testdata.age,
      sex:testdata.sex,
      city:testdata.city,
      address:testdata.address,
      email:testdata.email,
      phoneNumber:testdata.phoneNumber
    }
    console.log(finalTestData)
    try{
    
    setMessage("")
    const response = await bookTestApi(finalTestData)
    console.log(response)
    toast.success(response.message)
    }catch(error){
      console.log(error.response)
      toast.error(error.response.data.message)
    }
    setProcessing(false)
  }

  // const testChangeHandler=(value)=>{
  //   const [test,amount] = value.split("|")
  //   setTestdata({...testdata,"test":test,"amount":amount})
  // }

  const getTestById=(testId)=>{
    return tests.find((test)=>test.id==testId)
  }

  const addToSelectedTest=(testId)=>{
    const found = selectedTests.find((test)=>test.id==testId)
    if(found) return

    const selectedT = getTestById(testId) 
    setSelectedTests([...selectedTests,selectedT])
    const total = totalAmount+selectedT.amount
    setTotalAmount(total)
  }

  const removeFromSelectedTest=(testId)=>{
    const toRemove = selectedTests.find((test)=>test.id===testId)
    if(!toRemove){
      return
    }
    const selected_tests = selectedTests.filter((test)=>test.id != testId)
    setSelectedTests(selected_tests)
    const total = totalAmount-toRemove.amount
    setTotalAmount(total)
  }



  return (
    <>
      {/* Appointment Start */}
      <div
        id="makeAppointment"
        className="container-fluid bg-primary py-5"
      >
        <div className="container py-5">
          <div className="row gx-5">
            <div className="d-none d-md-block col-lg-6 mb-5 mb-lg-0">
              <div className="mb-4">
                <h5 className="d-inline-block text-white text-uppercase border-bottom border-5">
                  Lab Tests
                </h5>

                <h1 className="display-4">
  Book a Lab Test for You or Your Family
</h1>
              </div>
              
<p className="text-white mb-5">
  Take control of your health with our reliable and convenient lab test services.
  Get accurate results from the comfort of your home or at our clinic.
  <br />
  ✅ Wide range of pathology tests available
  <br />
  ✅ Home sample collection option
  <br />
  ✅ Fast and accurate reports
  <br />
  ✅ Online and in-clinic booking options
  <br />
  Don't wait — book your lab test today and ensure peace of mind for you and your loved ones!
</p>


              <NavLink
                className="btn btn-dark rounded-pill py-3 px-5 me-3 mb-3"
                to="/treatment"
              >
                Find Treatments
              </NavLink>
              <NavLink
                className="btn btn-outline-dark rounded-pill py-3 px-5 mb-3"
                to="/service"
              >
                Find Services
              </NavLink>
            </div>
            <div className="col-lg-6">
              <div className="bg-white text-center rounded p-5">
                <h1 className="mb-4">Book For Blood Test</h1>
                <form>
                  <div className="row g-3">
                  <div className="col-12 col-sm-6 form-control bg-light border-0 gap-2">
                    {
                      selectedTests.map((test)=>(
                        <span class="badge rounded-pill bg-primary me-2 mb-2">{test.name} <button onClick={(event)=>removeFromSelectedTest(test.id)} type="button" className="btn-outline-none btn-sm btn-none rounded ml-1 bg-primary">X</button></span>
                      ))
                    }
                  
                  </div>
                  <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        value={testdata.test}
                        onChange={(event)=>addToSelectedTest(event.target.value)}
                      >
                        <option disabled selected>
                          Add Blood Test
                        </option>
                        {
                          tests.map((test,index)=>(<option key={index} value={test.id}>
                            {`${test.name} | ${test.amount}`}
                          </option>))
                        }
                        
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Total Amount"
                        style={{ height: 55 }}
                        value={`Total Amount : ${totalAmount}`}
                      
                      />
                      </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        value={testdata.city}
                        onChange={(event)=>setTestdata({...testdata,"city":event.target.value})}
                      >
                        <option disabled selected>
                          Select Your City
                        </option>
                        <option value={"gurugram"}>
                          Gurugram
                        </option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: 55 }}
                        value={testdata.sex}
                        onChange={(event)=>setTestdata({...testdata,"sex":event.target.value})}
                      
                      >
                        <option selected>Sex</option>
                        <option value={"male"}>Male</option>
                        <option value={"female"}>Female</option>
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        style={{ height: 55 }}
                        value={testdata.name}
                        onChange={(event)=>setTestdata({...testdata,"name":event.target.value})}
                      
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Age"
                        style={{ height: 55 }}
                        value={testdata.age}
                        onChange={(event)=>setTestdata({...testdata,"age":event.target.value})}
                      
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        style={{ height: 55 }}
                        value={testdata.email}
                        onChange={(event)=>setTestdata({...testdata,"email":event.target.value})}
                      
                      />
                    </div>
                    {/* <div className="col-12 col-sm-6">
                  <div className="date" id="date" data-target-input="nearest">
                    <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" style={{height: 55}} />
                  </div>
                </div> */}
                    {/* <div className="col-12 col-sm-6">
                  <div className="time" id="time" data-target-input="nearest">
                    <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" style={{height: 55}} />
                  </div>
                </div> */}
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Mobile Number"
                        style={{ height: 55 }}
                        value={testdata.phoneNumber}
                        onChange={(event)=>setTestdata({...testdata,"phoneNumber":event.target.value})}
                      
                      />
                    </div>
                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Enter Your Address"
                        style={{ height: 55 }}
                        value={testdata.address}
                        onChange={(event)=>setTestdata({...testdata,"address":event.target.value})}
                      
                      />
                    </div>
                    <div className="col-12">
                      <button
                        type="button"
                        disabled={processing}
                        className="btn btn-primary w-100 py-3"
                        onClick={()=>submitHandler()}
                      >
                        {processing?"processing...":"Book For Test"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End */}
    </>
  );
};
