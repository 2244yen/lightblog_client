import React, { Component } from 'react'
import './index.scss'

class RelatedPost extends Component {
  constructor (props) {
    super(props)
    this.state = {
      related: []
    }
    this.renderList = this.renderList.bind(this)
  }

  renderList () {
    let result = []
    result = this.state.related.map((item, key) => {
      const link = '/blog/' + item.url
      return (
        <div className="col-md-4">
          {
            item.thumbnail &&
              <img className="img-responsive" src={ item.thumbnail } title=""/>
          }
          <h4><a href={ link }>{ item.title }</a></h4>
        </div>
      )
    })
    return result
  }

  render () {
    return (
      <div className="view-related-post">
        <h3 className="related-post-title"><strong>Related Post</strong></h3>
        <div className="row top-30">
          { this.renderList() }
        </div>
      </div>
    )
  }

  componentDidMount () {
    import('../../services/article').then(api => {
      api.default.getRelated(this.props.id).then(response => {
        console.log(response)
        this.setState({ related: response.data })
      }, err => {
        console.log(err)
      })
    })
  }
}

export default RelatedPost