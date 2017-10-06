import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as AuthAction from '../actions/AuthAction';

import Signup from '../smart-components/Signup';
import Signin from '../smart-components/Signin';
import Welcome from '../smart-components/Welcome';
import AnchorLinkToggle from '../dumb-components/AnchorLinkToggle';

class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      toggleSignup: false
    }
  }
  componentWillMount() {
    console.log(this.props);
  }
  handleLogoutButton () {
    this.props.signoutUser();
  }
  handleSignupToggle () {
    if(this.state.toggleSignup) {
      this.setState({toggleSignup: false});
    }else{
      this.setState({toggleSignup: true});
    }
  }
  renderSigninSignout () {
    return (
      (!this.state.toggleSignup)
      ?
      <div>
        <Signin />
        <AnchorLinkToggle
          toggle={this.state.toggleSignup}
          toggleFalse={"Have a an account? click here to Sign In..."}
          toggleTrue={"Dont have an account? click here to Sign Up..."}
          onToggle={this.handleSignupToggle.bind(this)}
        />
      </div>
      :
      <div>
        <Signup />
        <AnchorLinkToggle
          toggle={this.state.toggleSignup}
          toggleFalse={"Have a an account? click here to Sign In..."}
          toggleTrue={"Dont have an account? click here to Sign Up..."}
          onToggle={this.handleSignupToggle.bind(this)}
        />
      </div>
    );
  }
  render () {
    return (
      <div>
        <div className="container">
          <div className="col-lg-8">
            <Welcome />
          </div>
          <div className="col-lg-4">
            {
              (!this.props.authenticated) ? 
              <div>
                {
                  this.renderSigninSignout()
                }
              </div>
              : 
              <div>
                <h1>You are signed-in</h1>
                <button onClick={this.handleLogoutButton.bind(this)}>Logout</button>
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps, {...AuthAction})(HomePage);
