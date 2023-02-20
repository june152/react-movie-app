import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import styles from "./Detail.module.css"

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
        <div className={styles.detail}>
            <div className={styles.detail__item}>
            <h1 className={styles.detail__info}>Detail Infomation</h1>
            {loading ? <h2>Loading....</h2> : 
            <div>
                <img src={info.large_cover_image} alt={info.title} className={styles.detail__cover}/>
            </div>
            }
            <h2><Link to={`/`}>Back</Link></h2>
            </div>
            {loading ? <h2>Loading....</h2> : 
            <div className={styles.detail__div}>
            <div>Title : {info.title}</div>
            <div>Year : {info.year}</div>
            <div>Rating : {info.rating} / 10.0</div>
            <div>Runtime : {info.runtime} mins</div>
            <div>
                <ul className={styles.detail__genres}>
                    genres : {info.genres && info.genres.map(g => <li key={g}>{g}</li>)}
                </ul>
            </div>
            <div>
                {info.description_full}
            </div>
        </div>
            }
            
        </div>
    )
}