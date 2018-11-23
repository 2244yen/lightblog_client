import React from 'react'
import SearchForm from './SearchForm'
import AsideFeed from '../AsideFeed'
import AsideTags from '../AsideTags'
import './index.scss'

function Sidebar (props) {
  return (
    <div>
      <aside>
        {/*<SearchForm search={ this.searchInSidebar } />*/}
        <SearchForm />
      </aside>
      <aside>
        <h4><b>Bài viết nổi bật</b></h4>
        <AsideFeed />
      </aside>
      <aside>
        <h4><b>Tags</b></h4>
        <AsideTags />
      </aside>
    </div>
  )
}

export default Sidebar