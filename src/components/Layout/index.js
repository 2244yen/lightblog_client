import React from 'react'
import { withRouter } from 'react-router-dom';
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

class Layout extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-8">
              { this.props.children }
            </div>
            <div className="col-md-4 col-sm-4">
              <Sidebar />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  // onSearch (data, path) {
  //   const dataFilter = this.state.dataFilter
  //   dataFilter.search = data
  //   this.setState({ dataFilter: dataFilter })
  //   console.log(this.state.dataFilter)
  // }
}


export default withRouter(Layout)