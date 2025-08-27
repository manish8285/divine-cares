import { useEffect, useState } from "react"
import { getPostsApi } from "../../../api"
import FlowerLoader from "../../../assets/img/flowerLoader.gif"
export const RecentPosts=()=>{
    const [posts,setPosts] = useState([])

    const fetchPosts=async()=>{
        try{
        let res = await getPostsApi()
        res = res.data.slice(0,6)
        setPosts(res)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchPosts()

    },[])
    return (
        <div className="mb-5">
        <h4 className="d-inline-block text-primary text-uppercase border-bottom border-5 mb-4">Recent Post</h4>
        {
            posts.map((blog)=>(
                <div className="d-flex rounded overflow-hidden mb-3">
          <img className="img-fluid" src={FlowerLoader} style={{width: 100, height: 100, objectFit: 'cover'}} alt />
          <a href className="h5 d-flex align-items-center bg-light px-3 mb-0">{blog.heading}</a>
        </div>
            ))
        }
        
      </div>
    )
}