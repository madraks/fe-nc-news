

export default function ArticleCard({image, title}) {
  const shortTitle = title.slice(0,25).trim()
  const fullTitle = shortTitle.length === title.length;
  return (
    <div className="article__card">
      <img className="article__card__image" src={image} alt={title}/>
      <li className="article__card__details">{fullTitle ? title : shortTitle + '...'}</li>
    </div>
    )
}