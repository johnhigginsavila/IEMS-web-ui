import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as AuthAction from '../actions/AuthAction';

import Signup from '../components/Signup';
import Signin from '../components/Signin';
import Welcome from '../components/Welcome';
import AnchorLinkToggle from '../components/common/AnchorLinkToggle';

import '../styles/HomePage.scss';

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
          toggleTrue={"Have a an account? click here to Sign In..."}
          toggleFalse={"Dont have an account? click here to Sign Up..."}
          onToggle={this.handleSignupToggle.bind(this)}
        />
      </div>
      :
      <div>
        <Signup />
        <AnchorLinkToggle
          toggle={this.state.toggleSignup}
          toggleTrue={"Have a an account? click here to Sign In..."}
          toggleFalse={"Dont have an account? click here to Sign Up..."}
          onToggle={this.handleSignupToggle.bind(this)}
        />
      </div>
    );
  }
  render () {
    console.log(this.props);
    return (
      <div className="container-fluid homepageContainer">
        <div className="homepageBody col-12 row">
          <div className="sessionContainer col-lg-4 col-sm-12 order-lg-12">
              {
                (!this.props.authenticated) ? 
                <div>
                  {
                    this.renderSigninSignout()
                  }
                </div>
                : 
                null
              }
            </div>
          <div className="col-lg-8 col-sm-12 order-lg-1 welcomeContainer">
            <Welcome />
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
