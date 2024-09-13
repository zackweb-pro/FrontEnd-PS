import { useEffect } from "react"
import axios from "axios"

export default function Chart(){
    const styles = {
        background: "blue",
        maxWidth: "700px",
        height: "160px",
        borderRadius: "7px",
        marginTop: "20px",
        opacity: ".2"
    }
    const fetchAPI = async () =>{ 
        const response = await axios.get("http://localhost:8081/api");
        console.log(response.data.fruits)
    }
    useEffect(()=>{
        fetchAPI()
    },[])
    return(
        <div style={styles} className="Chart"></div>
    )
}