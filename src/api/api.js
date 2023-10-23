import axios from "axios";

const api = axios.create({
  baseURL: 'https://nc-news-madraks.onrender.com/api'
})

const fetchAllArticles = () => {
  return api.get('/articles')
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err)
    })
};

fetchAllArticles();

export { fetchAllArticles }