import axios from "axios"
import { useEffect, useState } from "react"

const useFetchDetails = (endpoint)=>{
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)

    const fetchData = async()=>{
        try {
            setLoading(true)
            const response = await axios.get(endpoint)
            setLoading(false)
            setData(response.data)
        } catch (error) {
            console.log('error',error)
       }
    }

    useEffect(()=>{
        fetchData()
    },[endpoint])

    return { data , loading}
}

export default useFetchDetails