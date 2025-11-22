import { useParams } from "react-router-dom"
import { getOrderByViewTokenApi } from "../../api"
import { useEffect, useState } from "react";
import { OrderDetails } from "../common";

export const OrderDetailsPage=()=>{
    const {viewToken} = useParams();
    const [order,setOrder] = useState(null);

    const loadOrder=async()=>{
        try{
        const res =  await getOrderByViewTokenApi(viewToken)
        console.log(res);
        setOrder(res.data)
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        loadOrder()
    },[])


    return (
        <OrderDetails order={order} />
    )
}