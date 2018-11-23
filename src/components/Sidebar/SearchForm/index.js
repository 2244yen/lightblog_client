import React from 'react'
import PubSub from 'pubsub-js'
import { withRouter } from 'react-router'

function SearchForm (props) {
  let changeInput = (e) => {
    e.preventDefault()
    if (e.keyCode === 13) {
      const path = props.location.pathname.trim().split(/\//)
      // props.search(e.target.value, path[1])
      PubSub.publish('SEARCH', [e.target.value, path[1]])
    }
  }
  return (
    <div>
      <input type="text" name="search" className="form-control" onKeyUp={ changeInput } placeholder="Tìm kiếm..." />
    </div>
  )
}

export default withRouter(SearchForm)