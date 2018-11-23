import React from 'react'
import './index.scss'

class AsideFeed extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      featuredList: []
    }
  }

  componentDidMount () {
    const params = { isFeatured: true }
    import ('../../services/article').then(api => {
      api.default.getList(params).then(response => {
        this.setState({ featuredList: response.data })
      }, err => {
        console.log(err)
      })
    })
    
  }

  render () {
    const result = this.state.featuredList.map((item, key) => {
      const link = '/blog/' + item.url
      return (<li key={key}><a href={ link }>{ item.title }</a></li>)
    })

    return (
      <div className="feed-wrap">
        <ul className="list-unstyled">
          { result }
        </ul>
      </div>
    )
  }
}

export default AsideFeed