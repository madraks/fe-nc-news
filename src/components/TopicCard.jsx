import { Link } from "react-router-dom"
export default function TopicCard({slug, description, index}) {

  return (
    <Link to={`/topics/${slug}`}>
    <div className="topic__card">
    <img className="topic__card__image" src={`/${index}.avif`} alt={description} />
    <div className="topic__card__slug"><li>{slug}</li></div>
    <li className="topic__card__description">{description}</li>
  </div>
  </Link>
  )
}