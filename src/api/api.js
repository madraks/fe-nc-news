import axios from "axios";

const api = axios.create({
  baseURL: 'https://nc-news-madraks.onrender.com/api'
})

const fetchAllArticles = (sortby, order) => {
  return api.get('/articles', { params: { sortBy: sortby, order: order}})
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
    .catch((err) => {
      console.log(err);
    })
  }
  
  const updateVotesOnArticle = (article_id, value) => {
    return api.patch(`/articles/${article_id}`, {inc_votes: value})
    .then((res) => {
      return res.data.updatedArticle;
    })
    .catch((err) => {
      console.log(err)
    })
}

const postComment = (article_id, user, value) => {
  api.post(`/articles/${article_id}/comments`, { username: user, body: value })
  .then((res) => {
    return res.data.comment;
  })
  .catch((err) => {
    console.log(err)
  })
}

const fetchAllTopics = () => {
  return api.get(`/topics`)
    .then((res) => {
      return res.data.topics
    })
}

const fetchArticlesByTopic = (topicQuery) => {
  return api.get(`/articles?topic=${topicQuery}`)
    .then((res) => {
      return res.data.articles;
    })
    .catch((err) => {
      console.log(err);
    })
}

const updateCommentVote = (comment_id, value) => {
  return api.patch(`/comments/${comment_id}`, {inc_votes: value})
    .then((res) => {
      return res.data
    })
}

const removeComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`)

}

export { updateCommentVote, fetchAllArticles, fetchArticleByID, fetchUsers, fetchUser, fetchComments, updateVotesOnArticle, postComment, fetchArticlesByTopic, fetchAllTopics, removeComment }