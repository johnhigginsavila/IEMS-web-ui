import React,  { Component } from 'react';
import { connect } from 'react-redux';
import * as ActivityAction from '../actions/ActivityAction';
import GoDashBoard from 'react-icons/lib/go/dashboard';
import '../styles/DashBoard.page.scss';
// import InputGroup from '../components/common/InputGroup';
import ActivityCard from '../components/common/ActivityCard';

class DashboardPage extends Component {
  constructor (props) {
    super(props);
    this.props.getAllActivities();
  }
  componentWillMount () {
    if (this.props.authenticated) {
      this.props.getAllActivities();
    }
  }

  render () {
    // const {location, activities} = this.props;
    console.log(this.props.activities);
  
    return (
      <div className="dashboardContainer">
        <div className="dashboardHeading">
          <div className="d-inline-flex" style={{color: '#0C66EB'}}>
            <h3><GoDashBoard />Dashboard</h3>
          </div>
          <hr />
        </div>
        <div className="dashboardContainerBody">
            <div className="eventSelector">
              <div className="d-flex">
                <div className="dropdown">
                  <a className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuLinkProgram" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Event
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkProgram">
                    <a className="dropdown-item" >Event 1</a>
                    <a className="dropdown-item" >Event 2</a>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="DashboardSubHeading">
              <h6>Event Details</h6>
            </div>
            <div className="eventDetails">
              <div class="alert alert-light" role="alert">
                This is a light alert—check it out!
                {this.activities}
                {this.location}
              </div>
            </div>
            <div className="activityContainer">
             {/*  <div class="row">
                <div className="col-lg-4" style={{display: 'flex'}}>                
                  <ActivityCard />
                  <ActivityCard />
                  <ActivityCard />
                </div>
              </div> */}
              <div class="row">
                <div className="row">                
                  <ActivityCard />
                  <ActivityCard />
                  <ActivityCard />
                </div>
              </div>
          </div>
        </div>
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
