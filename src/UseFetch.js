import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error,setError] = useState(null)
    useEffect(() => {
        fetch(url).then(res => {
            if (!res.ok) {
                throw Error("response has a status of " + res.status)
            }
            return res.json()
        }).then(data => {
            setData(data)
        }).catch(error => {
            setError(error)
            console.error(error)
        })
    },[])
    return { data , error}
}

export default useFetch