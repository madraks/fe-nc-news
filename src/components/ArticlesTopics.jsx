import { useState } from "react";
import { fetchArticlesByTopic } from "../api/api";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";


export default function ArticlesTopics() {

  const [articles, setArticles] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  fetchArticlesByTopic(topic)
    .then((data) => {
      setArticles(data);
      setIsLoading(false);
    })

    if (isLoading) return <h2>Loading</h2>

    return (
      <div className="container">
      <ul className="articles__list">
        {articles.map((article) => {
          return ( <ArticleCard key={article.article_id} title={article.title} image={article.article_img_url} id={article.article_id}/>)
        })}
      </ul>
      </div>
    )


}