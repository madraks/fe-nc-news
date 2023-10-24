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

const fetchArticleByID = (article_id) => {
  return api.get(`/articles/${article_id}`)
    .then((res) => {
      return res.data.article
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchUsers = () => {
  return api.get(`/users`)
    .then((res) => {
      return res.data.users
    })
    .catch((err) => {
      console.log(err)
    })
}

export { fetchAllArticles, fetchArticleByID, fetchUsers }