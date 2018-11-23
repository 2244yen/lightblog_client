import React from 'react'

class AsideTags extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      tags: []
    }
  }

  componentDidMount () {
    const params = { isFeatured: true }
    let tags = []
    import ('../../services/article').then(api => {
      api.default.getTags().then(response => {
        response.data.forEach(item => {
          tags = tags.concat(item.tags)
        })
        const set = new Set(tags)
        this.setState({ tags: [...set] })
      }, err => {
        console.log(err)
      })
    })
    
  }

  render () {
    const result = this.state.tags.map((item, key) => {
      if (item) {
        const uri = "/tag/" + item
        return (<li key={key}><a href={ uri }>{ item }</a></li>)
      }
    })

    return (
      <div className="widget-tags">
        <ul className="list-unstyled">
          { result }
        </ul>
      </div>
    )
  }
}

export default AsideTags