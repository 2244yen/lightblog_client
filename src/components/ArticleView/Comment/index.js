import React from 'react'
import './index.scss'

class Comment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      cmt: ''
    }
    this.updateCmt = this.updateCmt.bind(this)
  }

  updateCmt () {

  }

  render () {
    return (
      <div>
        <div className="cmt-wrap">
          <h3><b>Bình luận</b></h3>
          <div className="form-group">
            <textarea placeholder="Nhập nội dung vào đây" onChange={ this.updateCmt } className="form-control"></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-primary" onClick={ this.updateCmt }>Đăng</button>
          </div>
        </div>
        <div className="show-cmt-wrap">
          <div className="cmt-row">
            <div class="cmt-author">
              <img src="" className="img-responsive" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comment