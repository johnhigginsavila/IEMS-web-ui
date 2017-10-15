import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';

export default function(ComposedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: PropTypes.object
    }

    componentWillMount() {
      if (!this.props.authenticated || (!this.props.user || !this.props.user.admin)) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!this.props.authenticated || (!this.props.user || !this.props.user.admin)) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.auth.authenticated, user: state.auth.user };
  }

  return connect(mapStateToProps)(Authentication);
}
