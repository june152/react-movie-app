import { useEffect, useState } from "react"
import axios from "axios"
import Movie from "../component/Movie"
import styles from "./Home.module.css"

export default function Home() {
    const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  useEffect(() => {
    const data = async () => {
      await axios.get("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year")
      .then((res) => {
        setItems(res.data.data.movies)
        setLoading(false)
      })
    }
    data()
  }, [])
  return (
    <div className={styles.container}>
      {loading ? <h1>Loading....</h1> : 
      <div className={styles.movies}>{items.map(
        (item) => 
        <Movie 
          key={item.id}
          id={item.id}
          coverImg={item.medium_cover_image} 
          title={item.title} 
          summary={item.summary} 
          genres={item.genres}
          year={item.year} />
        )
        }
      </div>}
    </div>
  );
}