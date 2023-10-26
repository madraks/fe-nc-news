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

const fetchUser = (username) => {
  return api.get(`/users/${username}`)
    .then((res) => {
      return res.data.user;
    })
    .catch((err) => {
      console.log(err)
    })
}

const fetchComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`)
    .then((res) => {
      return res.data.comments;
    })
}

const updateVotesOnArticle = (article_id, value) => {
  return api.patch(`/articles/${article_id}`, {inc_votes: value})
    .then((res) => {
      return res.data.updatedArticle;
    })
}

const postComment = (article_id, user, value) => {
  api.post(`/articles/${article_id}/comments`, { username: user, body: value })
    .then((res) => {
      return res.data.comment;
    })
}
export { fetchAllArticles, fetchArticleByID, fetchUsers, fetchUser, fetchComments, updateVotesOnArticle, postComment }