import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "../api/api";
import { useEffect, useState } from "react";


export default function ArticlesList() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles()
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error fetching data: ', err)
      });
  }, [])

  if(isLoading) return <h1>Loading items...</h1>


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