import './App.css'
import '../styles/header.css'
import '../styles/articles.css'
import '../styles/article.css'
import '../styles/nav.css'
import '../styles/comments.css'
import '../styles/utils.css';
import { Routes, Route } from 'react-router-dom' 
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'
import SingleArticle from './components/SingleArticle';
import Nav from './components/Nav'

function App() {

  return (
    <div className=''>
    <div className="top">
      <Header/>
      <Nav />
    </div>
      <Routes>
        <Route path="/" element={<ArticlesList/>}/>
        <Route path="/articles" element={<ArticlesList/>}/>
        <Route path="articles/:article_id" element={<SingleArticle />} />
      </Routes>
    </div>
  )
}

export default App
