import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as AuthAction from '../actions/AuthAction';

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
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon1">Email:</span>
          <input {...email} type="text" className="form-control" placeholder="" aria-label="Email" aria-describedby="basic-addon1" />
        </div>
        <br />
        <div className="input-group">
          <span className="input-group-addon" id="basic-addon2">Password:</span>
          <input {...password} type="password" className="form-control" placeholder="" aria-label="Password" aria-describedby="basic-addon1" />
        </div>
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