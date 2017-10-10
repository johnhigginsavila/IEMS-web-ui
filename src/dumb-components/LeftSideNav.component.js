import React from 'react';
import { Link } from 'react-router';
import FaListUI from 'react-icons/lib/fa/list-ul';
import FaListAlt from 'react-icons/lib/fa/list-alt';
import Facog from 'react-icons/lib/fa/cog';
const RightSideNav = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="dropdown" id="eventSelector">
          <a className="btn btn-default dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <Facog size={26} />Activity 1
          </a>

          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Manage activity 1</a>
            <a className="dropdown-item" href="#">Manage activity 2</a>
            <a className="dropdown-item"><Link to="event-management/NewEvent">New Activity</Link></a>
          </div>
        </div>
        <hr />
        <div className="dropdown">
          <a className="btn btn-default dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <FaListAlt size={26} />Program 1
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <a className="dropdown-item" href="#">Program 1</a>
            <a className="dropdown-item" href="#">Program 2</a>
            <a className="dropdown-item" href="#">New Program</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideNav;
