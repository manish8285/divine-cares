import { useEffect, useState } from "react"
import { RecentPosts } from "../RecentPosts"
import { TagCloud } from "../TagCloud"
import { Appointment } from "../../appointment"
import { getPostByUrlApi } from "../../../../api"
import { useParams } from "react-router-dom"
import FlowerLoader from "../../../../assets/img/flowerLoader.gif"
import Vinita from "../../../../assets/img/vinita.jpeg"
import GateBanner from "../../../../assets/img/gate1.png"
import { SEO } from "../../seo"

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL

export const SingleBlog=()=>{
    let params = useParams()
    const [blog,setBlog]=useState({})
    const loadBlog=async()=>{
      try{
      const res = await getPostByUrlApi(params.url)
      console.log(res)
      setBlog(res.data)
      }catch(error){
        console.log(error)
      }
    }
    useEffect(()=>{
      loadBlog()

    },[])

    const metaData = {
      title : blog.heading,
  description : blog.subTitle,
  keywords : blog.keywords,
  author : "Divine Homoeo Care",
  url : `https://www.divinehomoeocare.com/blog/${params.url}`, // change to your domain
  image : IMAGE_URL+blog.coverPic, // fallback image
    }

    return (
        <>
        <SEO />
{/* Blog Start */}
<div className="container py-5">
  <div className="row g-5">
    <div className="col-lg-8">
      {/* Blog Detail Start */}
      <div className="mb-5">
        <img className="img-fluid rounded mb-5" style={{maxWidth:"500px"}} src={IMAGE_URL+blog.coverPic} alt />
        <h1 className="mb-4">{blog.heading}</h1>
        <h4 className="text-primary">{blog.subTitle}</h4>
        <div dangerouslySetInnerHTML={{__html:blog.content}}></div>
        
        <div className="d-flex justify-content-between bg-light rounded p-4 mt-4 mb-4">
          <div className="d-flex align-items-center">
            <img className="rounded-circle me-2" src={Vinita} width={40} height={40} alt />
            <span>Dr. Vinita</span>
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
      <RecentPosts />
      {/* Recent Post End */}
      {/* Image Start */}
      <div className="mb-5">
        <img src={GateBanner} alt className="img-fluid rounded" />
      </div>
      {/* Image End */}
      {/* Tags Start */}
      {/* <TagCloud /> */}
      {/* Tags End */}

    </div>
    {/* Sidebar End */}

    
  </div>
  <Appointment />
</div>
{/* Blog End */}


        </>
    )
}