import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as AuthAction from '../actions/AuthAction';

class Signup extends Component {
  handleFormSubmit (formProps) {
    this.props.signupUser(formProps);
  }
  handleFormReset () {
    this.props.resetAuthError();
  }
  renderAlert () {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }
  render () {
    const { handleSubmit, fields: {email, password, passwordConfirm}} = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <legend>Sign up</legend>
        {this.renderAlert()}
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Email:</span>
          <input {...email} type="text" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        {email.touched && email.error && <div className="form-control alert alert-danger">{email.error}</div>}
        <br />
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Password:</span>
          <input {...password} type="password" className="form-control" placeholder="" aria-label="Password" aria-describedby="basic-addon1" />
        </div>
        {password.touched && password.error && <div className="alert alert-danger">{password.error}</div>}
        <br />
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Confirm Password:</span>
          <input {...passwordConfirm} type="password" className="form-control" placeholder="" aria-label="Password Confirm" aria-describedby="basic-addon1" />
        </div>
        {passwordConfirm.touched && passwordConfirm.error && <div className="alert alert-danger">{passwordConfirm.error}</div>}
        <br />
        <input className="btn btn-primary col-lg-3 col-sm-12 submitBtn" type="submit" value="Submit" />
        <input className="btn btn-primary col-lg-3 col-sm-12 resetBtn" type="reset" value="Reset" />
      </form>
    );
  }
}

const validate = (formProps) => {
  let errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

const mapStateToProps = (state) => {
  return { errorMessage: state.auth.error}
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, AuthAction) (Signup);
