import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleOpen } from '../../redux/actions/commonAction'
import RelatedPost from '../RelatedPost'
import Comment from './Comment'
import apiArticle from '../../services/article'
import './index.scss'

class ArticleView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      article: {}
    }
    this.clapArticle = this.clapArticle.bind(this)
  }

  getDetail () {
    apiArticle.getDetail(this.props.articleId).then(response => {
      this.setState({ article: response.data })
    }, error => {
      console.log(error)
    })
  }

  componentDidMount () {
    this.getDetail()
  }

  render () {
    const { article } = this.state
    if (article) {
      var xmlString = article.text || '', 
        parser = new DOMParser(), 
        doc = parser.parseFromString(xmlString, "text/xml");
    }
    return (
      <div className="post-wrap">
        <div className="view-post">
          {
            article &&
              <div className="blog-item">
                <div className="blog-info">
                  <figure>
                    <img src={ article.thumbnail } alt="" className="img-responsive width-100"/>
                  </figure>
                  <div>
                    <h2 className="blog-item_title text-uppercase">{ article.title && article.title }</h2>
                    <div className="blog-item_metadata">
                      <small><i className="fa fa-clock-o" aria-hidden="true"></i> { article.createdAt && window.moment(article.createdAt).format('DD/MM') }</small>
                      <small><i className="fa fa-user" aria-hidden="true"></i> { article.author ? ( article.author.name ? article.author.name : '' ) : '' }</small>
                      <small><i className="fa fa-comment" aria-hidden="true"></i> { article.comments  && article.comments.length } comment</small>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-xs-2">
                        <div className="top-30 post-stats">
                          <div className="custom-icon">
                            <span onClick={ this.clapArticle }>
                              <span className="post-stats_number">{ article.likes }</span> <br />
                              <i className="fa fa-heart-o"></i>
                            </span>
                          </div>
                          <div className="custom-icon">
                            <span><i className="fa fa-bookmark-o" aria-hidden="true"></i></span>
                          </div>
                          <div className="custom-icon">
                            <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-10 col-xs-10">
                        <div className="blog-item_cnt" dangerouslySetInnerHTML={{ __html: article.text }} />
                        <div className="blog-item_tags">
                          <ul className="list-unstyled">
                            {
                              article.tags &&
                              article.tags.map(tag => {
                                return (<li><a href={ "/tag/" + `$(tag)`}>{ tag }</a></li>)
                              })
                            }
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          }
        </div>
        <RelatedPost id={ this.props.articleId }/>
        { /*<Comment id={ this.props.articleId } />*/ }
      </div>
    )
  }

  clapArticle () {
    const { isAuth } = this.props
    const id = this.props.articleId
    if (!isAuth) {
      this.props.toggleOpen()
    } else {
      apiArticle.clap(id).then(response => {
        this.getDetail()
      }, error => {
        console.log(error)
      })
    }
  }
}

function mapStateToProps (state) {
  return {
    isAuth: state.userReducer.isAuth,
    user: state.userReducer.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    toggleOpen: () => dispatch(toggleOpen())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleView)