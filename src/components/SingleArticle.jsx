import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleByID, fetchUser } from "../api/api";
import CommentList from './CommentList'


export default function SingleArticle() {
  const [article, setArticle] = useState({});
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams()

  useEffect(() => {

      Promise.all([fetchArticleByID(article_id)])
        .then(([article]) => {
          setArticle(article);
          return fetchUser(article.author);
        })
        .then((correctUser) => {
          setUser(correctUser);
          setIsLoading(false);
        })
  }, [article_id])

  if (isLoading) {
    return <h1>Loading article...</h1>
  }

  return (
    <div className="container">
    <article className="single__article__container">
      <h2 className="single__article__title">{article.title}</h2>
      <img className="single__article__image" src={article.article_img_url} alt={`a photo about ${article.topic}`} />
      <p className="single__article__body">{article.body}</p>
      <img className="single__article__author__image" src={user.avatar_url} alt="an avatar for the author" />
      <p className="single__article__author">{article.author}</p>
      <p className="single__article__date">Date posted: {article.created_at.slice(0, 10)}</p>
      <p className="single__article__topic">{article.topic}</p>
    </article>
      <CommentList article={article}/>
    </div>
  )

}