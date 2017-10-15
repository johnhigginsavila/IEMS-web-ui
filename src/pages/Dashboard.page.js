import React,  { Component } from 'react';
import { connect } from 'react-redux';
import * as ActivityAction from '../actions/ActivityAction';

class DashboardPage extends Component {
  componentWillMount () {
    if (this.props.authenticated) {
      this.props.getAllActivities();
    }
  }
  render () {
    console.log(this.props);
    return (
      <div>
        <h1>DashboardPage</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.auth.authenticated,
    activities: state.activity.activities
  };
}

export default connect(mapStateToProps, {...ActivityAction} )(DashboardPage);
