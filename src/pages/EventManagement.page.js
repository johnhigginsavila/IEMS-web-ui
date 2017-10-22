import React,  { Component } from 'react';
import { Link } from 'react-router';
import CalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';
import '../styles/EventManagement.page.scss';
class EventManagementPage extends Component {
  render () {
    return (
        <div className="container-fluid newActivityContainer eventManagementContainer">
          <div className="dropdown" id="eventSelector">
            <a className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuActivity" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Event 
            </a>
            <Link to="/event-management/new-activity"><CalendarPlusO className="CalendarPlusO" size={26} color="#007bff" /></Link>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuActivity">
              <a className="dropdown-item" >Manage Event 1</a>
              <a className="dropdown-item" >Manage Event 2</a>
            </div>
          </div>
          <hr />
          <div className="row d-flex d-md-block flex-nowrap wrapper eventManagementBody">
            <main className="row col-12 main"> 
              <div className="page-header mt-3 col-sm-2 col-lg-2">
              </div>
                {this.props.children}
            </main>
          </div>
          <div className="dropdown">
            <a className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuLinkProgram" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Select Activity
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkProgram">
              <a className="dropdown-item" >Activity 1</a>
              <a className="dropdown-item" >Activity 2</a>
            </div>
          </div>
        </div>
    );
  }
}

export default EventManagementPage;