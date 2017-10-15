import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as AuthAction from '../actions/AuthAction';
import InputGroup from './common/InputGroup';

class SignIn extends Component {
  handlesFormSubmit ({email, password}) {
    this.props.signinUser({email, password});
  }
  handeFormReset () {
    this.props.resetAuthError();
  }
  renderAlert() {
    if (this.props.errorMessage) {
      return(
        <div className="alert alert-danger">
          <strong>Oops! </strong>{this.props.errorMessage}
        </div>
      );
    }
  }
  render () {
    const {handleSubmit, fields: {email, password}} = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.handlesFormSubmit.bind(this))} onReset={this.handeFormReset.bind(this)}>
        <legend>Sign in</legend>
        {this.renderAlert()}
        <InputGroup
          form={email}
          type="email"
          label="Email"
        />
        <br />
        <InputGroup
          form={password}
          type="password"
          label="Password"
        />
        <br />
        <input className="btn btn-primary col-sm-12 col-lg-3 submitBtn" type="submit" value="Submit" />
        <input className="btn btn-primary col-sm-12 col-lg-3 resetBtn" type="reset" value="Reset" />
      </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, {...AuthAction})(SignIn);