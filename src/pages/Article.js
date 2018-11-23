import React from 'react'
import ArticleView from '../components/ArticleView'

function Article (props) {
  return (
    <div>
      <ArticleView articleId={ props.match.params.id } />
    </div>
  )
}

export default Article