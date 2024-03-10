import { useEffect, useState } from "react"

const useFetch=(url)=>{
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())//json data to array conversion
        .then(result=>setData(result.products))
    },[url])
    return data
}
export default useFetch