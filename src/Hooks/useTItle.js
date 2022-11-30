import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Laptop House`
    }, [title])
}
export default useTitle