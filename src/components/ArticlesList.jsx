import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "../api/api";
import { useEffect, useState } from "react";


export default function ArticlesList() {

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("date");
  const [order, setOrder] = useState("desc")

  useEffect(() => {

    fetchAllArticles(sortBy, order)
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log('error fetching data: ', err)
      });
  }, [sortBy, order])

  if (isLoading) return <h1>Loading items...</h1>


  return (
    <div className="container">
      <select name="sort-by" id="sort-by" onChange={((e) => { setSortBy(e.target.value) })}>
        <option value="date">Most Recent</option>
        <option value="title">Alphabetical</option>
        <option value="comment">Comments</option>
        <option value="votes">Votes</option>
        <option value="author">Author</option>
      </select>
      <select name="order" id="order" onChange={((e) => { setOrder(e.target.value)})}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <ul className="articles__list">
        {articles.map((article) => {
          return (<ArticleCard key={article.article_id} title={article.title} image={article.article_img_url} id={article.article_id} />)
        })}
      </ul>
    </div>
  )
}