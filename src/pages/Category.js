import React from 'react'
import Articles from '../components/Articles'

function Category (props) {
  return (
    <div>
      <Articles history={props.history} slug={props.match.params.id} />
    </div>
  )
}

export default Category