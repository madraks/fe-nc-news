import './App.css'
import '../styles/header.css'
import '../styles/articles.css'
import '../styles/article.css'
import '../styles/nav.css'
import '../styles/comments.css'
import '../styles/articlebuttons.css'
import '../styles/insertcomment.css'
import '../styles/topics.css'
import '../styles/utils.css';
import { Routes, Route } from 'react-router-dom' 
import { useContext } from 'react'
import { UserContext } from './components/User'
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle';
import Nav from './components/Nav'
import UserProfile from './components/UserProfile'
import TopicsList from './components/TopicsList';
import ArticlesTopics from './components/ArticlesTopics'
import Login from './components/Login'
import ErrorPageNotFound from './components/ErrorPageNotFound'

function App() {

  const { loggedIn } = useContext(UserContext);

  return (
    <div className='container'>
    <div className="top">
      <Header/>
      <Nav />
    </div>
      <Routes>
        <Route path="*" element={<ErrorPageNotFound />}/>
        <Route path="/" element={<ArticlesList/>}/>
        <Route path="/articles" element={<ArticlesList/>}/>
        <Route path="articles/:article_id" element={<SingleArticle />} />
        <Route path="/topics" element={<TopicsList/>}/>
        <Route path="topics/:topic" element={<ArticlesTopics/>}/>
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
