import { fetchAllTopics } from "../api/api";
import { useEffect, useState } from "react";
import TopicCard from "./TopicCard";

export default function TopicsList() {
  const [isLoading, setIsLoading] = useState(true);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchAllTopics()
      .then((data) => {
        setTopics(data)
        setIsLoading(false);
      })
  }, [])

  if(isLoading) return <h2>Loading...</h2>

  return (
    <div className="container">
    <ul className="topics__list">
      {topics.map((topic, index) => {
        return <TopicCard key={index} slug={topic.slug} description={topic.description} index={index}/>
      })}
    </ul>
      </div>
  )
}