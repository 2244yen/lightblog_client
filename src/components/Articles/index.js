import React from 'react'
import PubSub from 'pubsub-js'
import Pagi from '../Pagination'
import apiArticle from '../../services/article'
import './index.scss'

function ejectHtmlTag (str) {
  if (str.trim()) {
    let pattern = /<([^>]+)>/ig
    str = str.replace(pattern, "")
  }
  return str
}

class Articles extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      articles: [],
      dataFilter: {
        page: 1
      },
      total: 1,
      limit: 10
    }
    this.onSearch = this.onSearch.bind(this)
    this.changePage = this.changePage.bind(this)
  }
  
  renderList () {
    let result = ''
    if (this.state.articles) {
      const articlesList = this.state.articles
      result = articlesList.map((item, key) => {
        const link = `/blog/${item.url}`
        return (
          <div className="blog-item" key={key}>
            <div className="blog-info">
              <div>
                <figure>
                  <a href={ link }><img src={ item.thumbnail } alt="" className="img-responsive"/></a>
                </figure>
              </div>
              <div>
                <h3 className="blog-item_title"><a href={ link }>{ item.title }</a></h3>
                <div className="blog-item_metadata">
                  <small><i className="fa fa-clock-o" aria-hidden="true"></i> { window.moment(item.createdAt).format('DD/MM') }</small>
                  <small><i class="fa fa-comment" aria-hidden="true"></i> { item.comments.length } comment</small>
                </div>
                <div className="blog-item_cnt">
                  { ejectHtmlTag(item.description) }
                </div>
              </div>
            </div>
          </div>
        )
      })
    }
    return result
  }

  onSearch (msg, data) {
    const dataFilter = this.state.dataFilter
    dataFilter.search = data[0] || ''
    this.setState({ dataFilter })
    this.getList()
  }

  getList () {
    apiArticle.getList(this.state.dataFilter).then(response => {
      if (response) {
        const totalPage = Math.ceil(response.total / this.state.limit)
        this.setState({ articles: response.data, total: totalPage })
        window.scrollTo(0,0)
      }
    }, err => {
      console.log(err)
    })
  }

  changePage (page) {
    const dataFilter = this.state.dataFilter
    dataFilter.page = page
    this.setState({ dataFilter })
    this.getList()
  }

  render () {
    const { dataFilter, total } = this.state
    return (
      <div className="blog">
        { this.renderList() }
        <div className="pagi-wrap">
          <div className="text-right">
            <Pagi total={ total } page={ dataFilter.page } changePage={ this.changePage }/>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount () {
    if (this.props.slug) {
      const dataFilter = this.state.dataFilter
      dataFilter.tags = this.props.slug
      this.setState({ dataFilter }, function () {
        this.getList()
      })
    } else {
      this.getList()
    }
    PubSub.subscribe('SEARCH', this.onSearch)
  }
}

export default Articles