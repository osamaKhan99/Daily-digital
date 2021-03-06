import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { verifyJwt, signoutUser } from '../actions';

class Header extends Component {

  componentDidMount() {
    if (this.props.authenticated && !this.props.user) {
      this.props.verifyJwt();  
    }
  }

  renderLinks() {
    if (this.props.authenticated) {      
      return (
        <div className="navbar-nav nav-item dropdown ml-auto">
          <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown02" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.props.username}</a>
          <div className="dropdown-menu" aria-labelledby="dropdown02">
            <Link className="dropdown-item" to="/my_posts">Your Posts</Link>
            <Link className="dropdown-item" to="/profile">Your Profile</Link>
            <div className="dropdown-divider" />
            <Link className="dropdown-item" to="/settings">Settings</Link>
            <Link className="dropdown-item" to="/" onClick={this.props.signoutUser}>Sign out</Link>
          </div>
        </div>
      );
    } else {
      return (
        <ul className="navbar-nav">
          <li className="nav-item" key={1}>
            <Link className="nav-link" to="/signup">Sign Up</Link>
          </li>
          <li className="nav-item" key={2}>
            <Link className="btn btn-secondary btn_sign_in ml-sm-2" to="/signin">Get Started</Link>
          </li>
        </ul>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-toggleable-md fixed-top navbar">
        <div className="container">
          <button className="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#navbarsExampleContainer" aria-controls="navbarsExampleContainer" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <Link className="navbar-brand" to="/">Daily Digital</Link>

          <div className="collapse navbar-collapse" id="navbarsExampleContainer">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts/new">Write?</Link>
              </li>
            </ul>
            <div className="ml-auto">
              {this.renderLinks()}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    username: state.auth.username,
  };
}

export default connect(mapStateToProps, { verifyJwt, signoutUser })(Header);

