import React, { Component } from 'react';
import { NavLink, Redirect, withRouter } from 'react-router-dom'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav } from 'react-bootstrap'
import { connect } from 'react-redux'
import { toggleOpen } from '../../redux/actions/commonAction'
import { logOut } from  '../../redux/actions/userAction'
import Login from '../Login'
import './index.scss'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
    this.signOutUser = this.signOutUser.bind(this)
  }

  showDataByAuth () {
    if (this.props.isAuth === false) {
      return (
        <NavItem eventKey={1} onClick={ this.props.toggleOpen }>
          Đăng nhập
        </NavItem>
      )
    } else {
      return (
        <NavDropdown eventKey={3} title={ (<img src={this.props.user.picture} class="profile-img" />) } id="basic-nav-dropdown">
          <MenuItem eventKey={3.1} href={ '/profile' }>Profile</MenuItem>
          <MenuItem eventKey={3.2} href={ '/editor' }>Tạo bài viết</MenuItem>
          <MenuItem eventKey={3.3} onClick={ this.signOutUser }>Đăng xuất</MenuItem>
        </NavDropdown>
      )
    }
  }
  
  signOutUser () {
    this.props.logOut()
    sessionStorage.clear()
    this.setState({ redirect: true })
  }
  
  render () {
    return (
      <div>
        <Navbar collapseOnSelect className="blog-navbar">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Logo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={2} href="/category">
                Bài viết
              </NavItem>
            </Nav>
            <Nav pullRight>
              { this.showDataByAuth() }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Login />
        { this.state.redirect && <Redirect to="/" />}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.userReducer.isAuth,
    user: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleOpen: () => dispatch(toggleOpen()),
    logOut: () => dispatch(logOut())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header))