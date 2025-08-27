import { myAxios } from "../base";

export const getPostsApi=async() => {
    const response = await myAxios.get('post/all')
    return response.data
}

export const getPostByUrlApi=async(url) => {
    const response = await myAxios.get(`post/${url}`)
    return response.data
}


