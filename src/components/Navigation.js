import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Navigation.scss';
import { Link } from 'react-router';
import logo from '../images/logo.png';
import * as AuthAction from '../actions/AuthAction';

class Navigation extends Component {

  handleLogoutButton () {
    this.props.signoutUser();
  }

  renderLinks () {
    const { user, authenticated } = this.props;
    let admin;
    (user) ? admin=user.admin || false : admin=false
    return (
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Home<span className="sr-only">(current)</span></Link>
        </li>
        {authenticated &&
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>}
        {authenticated && admin && <li className="nav-item">
          <Link to="/event-management" className="nav-link">Event Management</Link>
        </li>}
        {authenticated && admin &&<li className="nav-item">
          <Link to="/admin" className="nav-link">Admin Page</Link>
        </li>}
        {authenticated && <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle p-2 ml-auto" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Settings
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link to="/profile" className="dropdown-item" >My Profile</Link>
            <a className="dropdown-item" >Inbox</a>
            <a className="dropdown-item" onClick={this.handleLogoutButton.bind(this)}>Sign-out</a>
          </div>
        </li>}
      </ul>
    );
  }
  render () {
    console.log(this.props);
    return (
      <div className="navigationPageContainer">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="http://www.informatics.edu.ph" ><img src={logo} alt="logo" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              {this.renderLinks()}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps, {...AuthAction}) (Navigation);
