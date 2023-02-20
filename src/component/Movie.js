import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import styles from "./Movie.module.css"

export default function Movie({coverImg, title, summary, genres, id, year}) {
    return (
    <div className={styles.movie}>
    <img src={coverImg} alt={title} className={styles.movie__img} />
    <div>
    <h2 className={styles.movie__title}><Link to={`/movie/${id}`}>{title}</Link></h2>
    <h3 className={styles.movie__year}>{year}</h3>
    <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
    <ul className={styles.movie__genres}>
      {genres && genres.map((g) => <li key={g}>{g}</li>)}
    </ul>
    </div>
  </div>
  )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
}