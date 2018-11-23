import React, { Component } from 'react'
import { Pagination } from 'react-bootstrap'

class Pagi extends Component {
  constructor (props) {
    super(props)
    this.goToPage = this.goToPage.bind(this)
  }

  render () {
    const page = parseInt(this.props.page) || 1
    const result = []
    for (let i = 0; i < this.props.total; i++) {
      if (i + 1 === page) {
        result.push(<Pagination.Item active onClick={ e => this.goToPage(e, i + 1) }>{i + 1}</Pagination.Item>)
      } else {
        result.push(<Pagination.Item onClick={ e => this.goToPage(e, i + 1) }>{i + 1}</Pagination.Item>)
      }
    }
    return (
      <Pagination>
        <Pagination.First onClick={ e => this.goToPage(e, 1) }/>
        {
          this.props.page > 1 ? 
          (
            <Pagination.Prev onClick={ e => this.goToPage(e, this.props.page - 1) }/>
          ) : (
            <Pagination.Prev disabled />
          )
        }

        { result }

        {
          this.props.page < this.props.total ? 
          (
            <Pagination.Next onClick={ e => this.goToPage(e, this.props.page + 1) }/>
          ) : (
            <Pagination.Next disabled />
          )
        }
        <Pagination.Last onClick={ e => this.goToPage(e, this.props.total) }/>
      </Pagination>
    )
  }

  goToPage (e, page) {
    this.props.changePage(page)
  }
}

export default Pagi