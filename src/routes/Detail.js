import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

export default function Detail() {
    const [loading, setLoading] = useState(true)
    const [info, setInfo] = useState([])
    const {id} = useParams()
    useEffect(() => {
        const data = async () => {
            await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            .then((res) => {
                console.log(res.data.data.movie)
                setInfo(res.data.data.movie)
            })
        }
        data()
        setLoading(false)
    }, [])
    return (
        <div>
            <h1>Detail Infomation</h1>
            <hr />
            {loading ? <h2>Loading....</h2> : 
            <div>
                <img src={info.large_cover_image} alt={info.title} />
                <span>{info.title}</span>
            </div>
            }
            <h2><Link to={`/`}>Back</Link></h2>
        </div>
    )
}