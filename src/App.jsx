import { useState } from 'react'
import './App.css'
import '../styles/header.css'
import '../styles/articles.css'
import '../styles/utils.css';
import Header from './components/Header'
import ArticlesList from './components/ArticlesList'

function App() {

  return (
    <div className='container'>
      <Header/>
      <ArticlesList/>
    </div>
  )
}

export default App
