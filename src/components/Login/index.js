import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux'
import { signInUser } from '../../redux/actions/userAction'
import { toggleClose, toggleOpen } from '../../redux/actions/commonAction'
import './index.scss'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  render () {
    const responseGoogle = (res) => {
      let postData = {
          provider: 'google',
          email: res.w3.U3,
          provider_id: res.El,
          token: res.Zi.access_token,
          provider_pic: res.w3.Paa,
          name: res.profileObj.name,
          username: res.profileObj.familyName + res.profileObj.givenName
      }
      this.props.signInUser(postData)
      this.props.toggleClose()
    }

    return (
      <div data-behavior="overlay" className={this.props.modalMode === true ? 'overlay overlay-hugeinc open' : 'overlay overlay-hugeinc'}>
        <button onClick={this.props.toggleClose} data-behavior="close-overlay" type="button" className="overlay-close"><span className="glyphicon glyphicon-remove"></span></button>
        <nav>
          <h2 className="grayed-heading center">Sign In</h2>
          <ul className="omniauth-button-group list-unstyled">
            <li className="omniauth-button google">
              <GoogleLogin className="button google"
                clientId="952456757902-uuk398mp4nkggnupufuuho2rf4a3e4co.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle} >
                <i className="fa fa-google"></i><span> Sign In with Google</span>
              </GoogleLogin>
            </li>
          </ul>
        </nav>
        <div className="top-30 text-center">
          No account? <a href="#">Create One</a>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    modalMode: state.commonReducer.modalMode
  }
}

export default connect(mapStateToProps, { signInUser, toggleClose, toggleOpen })(Login)