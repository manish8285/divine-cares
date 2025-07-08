import { useState } from "react";
import { NavLink } from "react-router-dom";
import { bookTestApi, makeAppointmentApi } from "../../../api";
import { toast } from "react-toastify";

const tests = [
    {
      "id": 1,
      "name": "HEMOGLOBIN (HB)",
      "amount": 100,
      "sample": "EDTA"
    },
    {
      "id": 2,
      "name": "TOTAL PROTEIN",
      "amount": 100,
      "sample": "PLAIN"
    },
    {
      "id": 3,
      "name": "BLOOD GROUP (ABO)",
      "amount": 100,
      "sample": "EDTA"
    },
    {
      "id": 4,
      "name": "S.ALBUMIN",
      "amount": 100,
      "sample": "PLAIN"
    },
    {
      "id": 5,
      "name": "TLC/DLC",
      "amount": 100,
      "sample": "EDTA"
    },
    {
      "id": 6,
      "name": "T. CHOLESTROL",
      "amount": 200,
      "sample": "PLAIN"
    },
    {
      "id": 7,
      "name": "PLATELETS COUNT",
      "amount": 100,
      "sample": "EDTA"
    },
    {
      "id": 8,
      "name": "T.G.",
      "amount": 200,
      "sample": "PLAIN"
    },
    {
      "id": 9,
      "name": "ESR",
      "amount": 100,
      "sample": "EDTA"
    },
    {
      "id": 10,
      "name": "LIVER FUNCTION TEST",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 11,
      "name": "BT/CT",
      "amount": 200,
      "sample": "PATIENT"
    },
    {
      "id": 12,
      "name": "KINDEY FUNCTION TEST",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 13,
      "name": "WIDAL",
      "amount": 100,
      "sample": "PLAIN"
    },
    {
      "id": 14,
      "name": "LIPID PROFILE",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 15,
      "name": "MALARIA ANTIGEN",
      "amount": 500,
      "sample": "EDTA"
    },
    {
      "id": 16,
      "name": "STOOL R/M",
      "amount": 300,
      "sample": "STOOL"
    },
    {
      "id": 17,
      "name": "MALARIA PARASITE",
      "amount": 100,
      "sample": "EDTA"
    },
    {
      "id": 18,
      "name": "ANC PROFILE WITH TSH",
      "amount": 1500,
      "sample": "E+P+FL+URINE"
    },
    {
      "id": 19,
      "name": "TYPHI DOT",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 20,
      "name": "SPECIAL TEST HIV",
      "amount": 1,
      "sample": "&"
    },
    {
      "id": 21,
      "name": "",
      "amount": 2,
      "sample": "DOT"
    },
    {
      "id": 22,
      "name": "",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 23,
      "name": "TSH",
      "amount": 300,
      "sample": "PLAIN"
    },
    {
      "id": 24,
      "name": "HBsAg",
      "amount": 350,
      "sample": "PLAIN"
    },
    {
      "id": 25,
      "name": "T3 , T4 , TSH",
      "amount": 650,
      "sample": "PLAIN"
    },
    {
      "id": 26,
      "name": "CRP QUANTITATIVE",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 27,
      "name": "FT3 , FT4 , TSH",
      "amount": 700,
      "sample": "PLAIN"
    },
    {
      "id": 28,
      "name": "VDRL",
      "amount": 250,
      "sample": "PLAIN"
    },
    {
      "id": 29,
      "name": "LH",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 30,
      "name": "RA FACTOR QUALITATIVE",
      "amount": 350,
      "sample": "PLAIN"
    },
    {
      "id": 31,
      "name": "FSH",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 32,
      "name": "RA QUANTITATIVE",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 33,
      "name": "PRL",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 34,
      "name": "DENGUE NS1",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 35,
      "name": "HBA1C",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 36,
      "name": "DENGUE IgG/IgM",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 37,
      "name": "IRON",
      "amount": 500,
      "sample": "PLAIN"
    },
    {
      "id": 38,
      "name": "CHIKUNGUNYA IGM",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 39,
      "name": "IRON & TIBC",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 40,
      "name": "PREGNANCY TEST (UPT)",
      "amount": 100,
      "sample": "URINE/PLAIN"
    },
    {
      "id": 41,
      "name": "VITAMIN B12",
      "amount": 1000,
      "sample": "PLAIN"
    },
    {
      "id": 42,
      "name": "MX TEST",
      "amount": 200,
      "sample": "PATIENT"
    },
    {
      "id": 43,
      "name": "VITAMIN D-25",
      "amount": 1400,
      "sample": "PLAIN"
    },
    {
      "id": 44,
      "name": "SUGAR FASTING",
      "amount": 100,
      "sample": "FLORIDE"
    },
    {
      "id": 45,
      "name": "URINE C/S",
      "amount": 600,
      "sample": "URINE"
    },
    {
      "id": 46,
      "name": "SUGAR RANDOM",
      "amount": 100,
      "sample": "FLORIDE"
    },
    {
      "id": 47,
      "name": "SEMEN C/S",
      "amount": 600,
      "sample": "SEMAN"
    },
    {
      "id": 48,
      "name": "SUGAR FASTING+PP",
      "amount": 150,
      "sample": "FLORIDE"
    },
    {
      "id": 49,
      "name": "STOOL C/S",
      "amount": 600,
      "sample": "STOOL"
    },
    {
      "id": 50,
      "name": "URINE ALBUMIN+SUGAR",
      "amount": 100,
      "sample": "URINE"
    },
    {
      "id": 51,
      "name": "BLOOD C/S",
      "amount": 1200,
      "sample": "HEPARIN"
    },
    {
      "id": 52,
      "name": "TOTAL EOSINOPHIL COUNT",
      "amount": 200,
      "sample": "EDTA"
    },
    {
      "id": 53,
      "name": "SPUTAM C/S",
      "amount": 600,
      "sample": "SPUTAM"
    },
    {
      "id": 54,
      "name": "CBC",
      "amount": 200,
      "sample": "EDTA"
    },
    {
      "id": 55,
      "name": "TORCH IgG+IgM(",
      "amount": 10,
      "sample": "PARA)"
    },
    {
      "id": 56,
      "name": "",
      "amount": 2500,
      "sample": "PLAIN"
    },
    {
      "id": 57,
      "name": "CBC+ESR+PS",
      "amount": 400,
      "sample": "EDTA"
    },
    {
      "id": 58,
      "name": "ALLERGY PROFILE COMP",
      "amount": 6000,
      "sample": "PLAIN"
    },
    {
      "id": 59,
      "name": "FEVER PANEL",
      "amount": 400,
      "sample": "EDTA/PLAIN"
    },
    {
      "id": 60,
      "name": "TESTOSTERONE TOTAL",
      "amount": 800,
      "sample": "PLAIN"
    },
    {
      "id": 61,
      "name": "FEVER PANEL&BILLIRUBIN",
      "amount": 500,
      "sample": "EDTA/PLAIN"
    },
    {
      "id": 62,
      "name": "TESTOSTERONE FREE",
      "amount": 1500,
      "sample": "PLAIN"
    },
    {
      "id": 63,
      "name": "FEVER PANEL&URINE R/M",
      "amount": 500,
      "sample": "EDTA/PLAIN"
    },
    {
      "id": 64,
      "name": "BETA HCG",
      "amount": 700,
      "sample": "PLAIN"
    },
    {
      "id": 65,
      "name": "URINE R/M",
      "amount": 100,
      "sample": "URINE"
    },
    {
      "id": 66,
      "name": "LH , FSH , PRL , TSH",
      "amount": 1600,
      "sample": "PLAIN"
    },
    {
      "id": 67,
      "name": "HCV",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 68,
      "name": "PROTHROMBIN TIME (PT)",
      "amount": 600,
      "sample": "S.CITIRATE"
    },
    {
      "id": 69,
      "name": "SEMAN ANALYSIS",
      "amount": 300,
      "sample": "SEMEN"
    },
    {
      "id": 70,
      "name": "APTT",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 71,
      "name": "UREA",
      "amount": 150,
      "sample": "PLAIN"
    },
    {
      "id": 72,
      "name": "LIPASE",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 73,
      "name": "CREATNINE",
      "amount": 150,
      "sample": "PLAIN"
    },
    {
      "id": 74,
      "name": "CPK-NAC",
      "amount": 800,
      "sample": "PLAIN"
    },
    {
      "id": 75,
      "name": "URIC ACID",
      "amount": 150,
      "sample": "PLAIN"
    },
    {
      "id": 76,
      "name": "TOTAL IGE",
      "amount": 800,
      "sample": "PLAIN"
    },
    {
      "id": 77,
      "name": "ELECTROLYTE PANEL",
      "amount": 400,
      "sample": "PLAIN"
    },
    {
      "id": 78,
      "name": "PSA TOTAL",
      "amount": 1000,
      "sample": "PLAIN"
    },
    {
      "id": 79,
      "name": "CALCIUM",
      "amount": 200,
      "sample": "PLAIN"
    },
    {
      "id": 80,
      "name": "PSA FREE & TOTAL",
      "amount": 2500,
      "sample": "PLAIN"
    },
    {
      "id": 81,
      "name": "PHOSPHYORUS",
      "amount": 400,
      "sample": "PLAIN"
    },
    {
      "id": 82,
      "name": "CPK MB",
      "amount": 800,
      "sample": "PLAIN"
    },
    {
      "id": 83,
      "name": "SERUM AMYLASE",
      "amount": 600,
      "sample": "PLAIN"
    },
    {
      "id": 84,
      "name": "TTG IGA",
      "amount": 1500,
      "sample": "PLAIN"
    },
    {
      "id": 85,
      "name": "BILLIRUBIN TOTAL",
      "amount": 200,
      "sample": "PLAIN"
    },
    {
      "id": 86,
      "name": "HPLC",
      "amount": 1000,
      "sample": "EDTA"
    },
    {
      "id": 87,
      "name": "SGOT",
      "amount": 150,
      "sample": "PLAIN"
    },
    {
      "id": 88,
      "name": "FNAC ( LAB )",
      "amount": 1000,
      "sample": "SLIDES"
    },
    {
      "id": 89,
      "name": "SGPT",
      "amount": 150,
      "sample": "PLAIN"
    },
    {
      "id": 90,
      "name": "MICROFILARIA SLIDE",
      "amount": 600,
      "sample": "EDTA"
    },
    {
      "id": 91,
      "name": "ALK. PHOSPHATE",
      "amount": 150,
      "sample": "PLAIN"
    },
    {
      "id": 92,
      "name": "MICROFILARIA ANTIGEN",
      "amount": 1400,
      "sample": "EDTA+PLAIN"
    },
    {
      "id": 93,
      "name": "HEALTH PACKAGE MINI",
      "amount": 1800,
      "sample": "HEALTH"
    },
    {
      "id": 94,
      "name": "PACKAGE LARGE",
      "amount": 3000,
      "sample": ""
    }
  ]

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
    const toRemove = selectedTests.find((test)=>test.id=testId)
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
        className="container-fluid bg-primary my-5 py-5"
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
                className="btn btn-outline-dark rounded-pill py-3 px-5"
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
