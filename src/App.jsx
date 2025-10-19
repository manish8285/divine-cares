import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import './assets/css/style.css'
import './assets/css/bootstrap.min.css'
import './assets/lib/owlcarousel/assets/owl.carousel.min.css';
import './assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css';

//import moment from 'moment';

//import './assets/lib/easing/easing.min.js';
import './assets/lib/waypoints/waypoints.min.js';
import './assets/lib/owlcarousel/owl.carousel.min.js';
//import './assets/lib/tempusdominus/js/moment.min.js';
//import './assets/lib/tempusdominus/js/moment-timezone.min.js';
import './assets/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js';
import './assets/js/main.js'
import { AboutPage,
   ContactPage,
    HomePage,
     PricingPage,
      ServicePage,
       TreatmentPage,
        TermsAndConditionsPage,
        PrivacyPolicyPage,
        RefundPolicyPage,
        AppointmentPage, 
        CareerPage,
        GalleryPage,
        TestsPage,
        BlogsPage,
        SingleBlogPage,
        PackagePage,
        ProductsPage
      } from './components/pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AuthLayout, HomeLayout, Login, SignUp } from './components/common/index.js'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <BrowserRouter>
    <ToastContainer />
    <Routes >
      <Route path='/' element={<HomeLayout />}>
      <Route index element={<HomePage/>} />
      <Route path='about' element={<AboutPage />} />
      <Route path='service' element={<ServicePage />} />
      <Route path='pricing' element={<PricingPage />} />
      <Route path='contact' element={<ContactPage />} />
      <Route path='treatment' element={<TreatmentPage />} />
      <Route path='terms-conditions' element={<TermsAndConditionsPage/>} />
      <Route path='privacy-policy' element={<PrivacyPolicyPage/>} />
      <Route path='refund-policy' element={<RefundPolicyPage/>} />
      <Route path='appointment' element={<AppointmentPage/>} />
      <Route path='career' element={<CareerPage/>} />
      <Route path='tests' element={<TestsPage/>} />
      <Route path='gallery' element={<GalleryPage />} />
      <Route path='products' element={<ProductsPage />} />
      <Route path='blogs' element={<BlogsPage />} />
      <Route path='blog/:url' element={<SingleBlogPage />} />
      <Route path='package/:url' element={<PackagePage />} />

      <Route path='auth/' element={<AuthLayout />}>
        <Route index element={<Login />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
      
      </Route>

      </Route>
    </Routes>
    </BrowserRouter>

 

    </>
  )
}


export default App
