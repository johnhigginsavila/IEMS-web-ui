import React from 'react';
import { Link } from 'react-router';
import CalendarPlusO from 'react-icons/lib/fa/calendar-plus-o';
import '../../styles/LeftSideNav.component.scss';

const LeftSideNav = () => {
  return (
    <div className="LeftSideNavContainer">
        <div className="dropdown" id="eventSelector">
          <a className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuActivity" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Activity 1 
          </a>
          <Link to="/event-management/new-activity"><CalendarPlusO className="CalendarPlusO" size={26} color="#007bff" /></Link>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuActivity">
            <a className="dropdown-item" >Manage activity 1</a>
            <a className="dropdown-item" >Manage activity 2</a>
          </div>
        </div>
        <hr />
        <div className="dropdown">
          <a className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuLinkProgram" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Program 1
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkProgram">
            <a className="dropdown-item" >Program 1</a>
            <a className="dropdown-item" >Program 2</a>
          </div>
        </div>
    </div>
  )
}

export default LeftSideNav;