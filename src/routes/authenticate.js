import React from 'react'
import { connect } from 'react-redux'
import { toggleOpen } from '../redux/actions/commonAction'

export default function (Component) {
  class Authenticate extends React.Component {
    componentWillMount () {
      if (!this.props.isAuth) {
        this.props.history.push('/')
        this.props.toggleOpen()
      }
    }

    render () {
      return (
        <Component {...this.props} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      isAuth: state.userReducer.isAuth
    }
  }

  return connect(mapStateToProps, { toggleOpen })(Authenticate)
}
