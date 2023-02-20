import { useEffect, useState } from "react"
import axios from "axios"
import Movie from "../component/Movie"

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
    <div>
      {loading ? <h1>Loading....</h1> : 
      <div>{items.map(
        (item) => 
        <Movie 
          key={item.id}
          id={item.id}
          coverImg={item.medium_cover_image} 
          title={item.title} 
          summary={item.summary} 
          genres={item.genres} />
        )
        }
      </div>}
    </div>
  );
}